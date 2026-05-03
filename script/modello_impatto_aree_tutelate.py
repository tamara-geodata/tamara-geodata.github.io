# ---------------------------------------------------------------------------
# Progetto: Valutazione Impatto Ambientale Aree Estrattive
# Autore: Tamara Ottaviani
# Data: Gennaio 2026
# Descrizione: Modello QGIS per l'analisi delle pendenze e degli ecosistemi
# QGIS version: 3.40
# ---------------------------------------------------------------------------


from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterVectorLayer
from qgis.core import QgsProcessingParameterRasterLayer
from qgis.core import QgsProcessingParameterFeatureSink
import processing


class ImpattoAmbientaleAreeEstrattive(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterVectorLayer('aree_boscate_2007', 'Aree boscate 2007', types=[QgsProcessing.TypeVectorPolygon], defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('aree_del_parco', 'Aree del Parco', types=[QgsProcessing.TypeVectorPolygon], defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('aree_reperimento_materiali_storici_mos', 'Aree reperimento materiali storici (MOS)', types=[QgsProcessing.TypeVectorPolygon], defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('doline', 'Doline', types=[QgsProcessing.TypeVectorPoint], defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('ecosistemi_tutelati', 'Ecosistemi_tutelati', types=[QgsProcessing.TypeVectorPoint], defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('influenza_ambiente_aree_cava_2019', 'Influenza ambiente aree cava 2019', types=[QgsProcessing.TypeVectorPolygon], defaultValue=None))
        self.addParameter(QgsProcessingParameterRasterLayer('mdt_20m_pendenza', 'MDT_20m_pendenza', defaultValue=None))
        self.addParameter(QgsProcessingParameterVectorLayer('sorgenti_carsiche', 'Sorgenti_carsiche', types=[QgsProcessing.TypeVectorPoint], defaultValue=None))
        self.addParameter(QgsProcessingParameterFeatureSink('Aree_estrattive_con_maggior_impatto_ambientale', 'Aree_estrattive_con_maggior_impatto_ambientale', type=QgsProcessing.TypeVectorAnyGeometry, createByDefault=True, defaultValue='TEMPORARY_OUTPUT'))
        self.addParameter(QgsProcessingParameterFeatureSink('Aree_estrattive_interne_al_parco', 'Aree_estrattive_interne_al_parco', type=QgsProcessing.TypeVectorAnyGeometry, createByDefault=True, defaultValue='TEMPORARY_OUTPUT'))
        self.addParameter(QgsProcessingParameterFeatureSink('Ecosistemi_e_carsismo_influenzati_da_aree_estrattive', 'Ecosistemi_e_carsismo_influenzati_da_aree_estrattive', type=QgsProcessing.TypeVectorAnyGeometry, createByDefault=True, defaultValue='TEMPORARY_OUTPUT'))

    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(13, model_feedback)
        results = {}
        outputs = {}

        # al05_Pendenza_media_cave
        alg_params = {
            'COLUMN_PREFIX': 'pend_',
            'INPUT': parameters['influenza_ambiente_aree_cava_2019'],
            'INPUT_RASTER': parameters['mdt_20m_pendenza'],
            'RASTER_BAND': 1,
            'STATISTICS': [2],  # Media
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al05_pendenza_media_cave'] = processing.run('native:zonalstatisticsfb', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(1)
        if feedback.isCanceled():
            return {}

        # al03a_influenza_area_cava_300m
        alg_params = {
            'DISSOLVE': False,
            'DISTANCE': 300,
            'END_CAP_STYLE': 0,  # Arrotondato
            'INPUT': parameters['influenza_ambiente_aree_cava_2019'],
            'JOIN_STYLE': 0,  # Arrotondato
            'MITER_LIMIT': 2,
            'SEGMENTS': 5,
            'SEPARATE_DISJOINT': False,
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al03a_influenza_area_cava_300m'] = processing.run('native:buffer', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(2)
        if feedback.isCanceled():
            return {}

        # al05a_estrazione_aree_pend_media_>_40
        alg_params = {
            'FIELD': 'pend_mean',
            'INPUT': outputs['Al05_pendenza_media_cave']['OUTPUT'],
            'OPERATOR': 2,  # >
            'VALUE': '40',
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al05a_estrazione_aree_pend_media__40'] = processing.run('native:extractbyattribute', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(3)
        if feedback.isCanceled():
            return {}

        # al01_Aree_estrattive_2007-2013
        alg_params = {
            'EXPRESSION': 'trim(lower(coalesce("descr_2007", \'\'))) <> trim(lower(coalesce("descr_2013", \'\')))\r\nAND\r\nlower(coalesce("descr_2013", \'\')) LIKE \'%aree estrattive%\'',
            'INPUT': parameters['aree_boscate_2007'],
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al01_aree_estrattive_20072013'] = processing.run('native:extractbyexpression', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(4)
        if feedback.isCanceled():
            return {}

        # al03b_influenza_area_cava_500m
        alg_params = {
            'DISSOLVE': False,
            'DISTANCE': 500,
            'END_CAP_STYLE': 0,  # Arrotondato
            'INPUT': parameters['influenza_ambiente_aree_cava_2019'],
            'JOIN_STYLE': 0,  # Arrotondato
            'MITER_LIMIT': 2,
            'SEGMENTS': 5,
            'SEPARATE_DISJOINT': False,
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al03b_influenza_area_cava_500m'] = processing.run('native:buffer', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(5)
        if feedback.isCanceled():
            return {}

        # al04a_estrai_ecosistemi_in_buffer_300m
        alg_params = {
            'INPUT': parameters['ecosistemi_tutelati'],
            'INTERSECT': outputs['Al03a_influenza_area_cava_300m']['OUTPUT'],
            'PREDICATE': [6],  # sono contenuti
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al04a_estrai_ecosistemi_in_buffer_300m'] = processing.run('native:extractbylocation', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(6)
        if feedback.isCanceled():
            return {}

        # al02b_intersezione_aree_mos_interne_al_parco
        alg_params = {
            'GRID_SIZE': None,
            'INPUT': parameters['aree_reperimento_materiali_storici_mos'],
            'INPUT_FIELDS': [''],
            'OVERLAY': parameters['aree_del_parco'],
            'OVERLAY_FIELDS': [''],
            'OVERLAY_FIELDS_PREFIX': None,
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al02b_intersezione_aree_mos_interne_al_parco'] = processing.run('native:intersection', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(7)
        if feedback.isCanceled():
            return {}

        # al02a_aree_cava_interne_al_parco
        alg_params = {
            'INPUT': outputs['Al01_aree_estrattive_20072013']['OUTPUT'],
            'INTERSECT': parameters['aree_del_parco'],
            'PREDICATE': [0],  # interseca
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al02a_aree_cava_interne_al_parco'] = processing.run('native:extractbylocation', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(8)
        if feedback.isCanceled():
            return {}

        # al02c_fusione_aree_estrattive
        alg_params = {
            'CRS': 'ProjectCrs',
            'LAYERS': [outputs['Al02b_intersezione_aree_mos_interne_al_parco']['OUTPUT'],outputs['Al02a_aree_cava_interne_al_parco']['OUTPUT']],
            'OUTPUT': parameters['Aree_estrattive_interne_al_parco']
        }
        outputs['Al02c_fusione_aree_estrattive'] = processing.run('native:mergevectorlayers', alg_params, context=context, feedback=feedback, is_child_algorithm=True)
        results['Aree_estrattive_interne_al_parco'] = outputs['Al02c_fusione_aree_estrattive']['OUTPUT']

        feedback.setCurrentStep(9)
        if feedback.isCanceled():
            return {}

        # al04c_estrai_doline_in_buffer_500m
        alg_params = {
            'INPUT': parameters['doline'],
            'INTERSECT': outputs['Al03b_influenza_area_cava_500m']['OUTPUT'],
            'PREDICATE': [6],  # sono contenuti
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al04c_estrai_doline_in_buffer_500m'] = processing.run('native:extractbylocation', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(10)
        if feedback.isCanceled():
            return {}

        # al04b_estrai_ecosistemi_in_buffer_500m
        alg_params = {
            'INPUT': parameters['sorgenti_carsiche'],
            'INTERSECT': outputs['Al03b_influenza_area_cava_500m']['OUTPUT'],
            'PREDICATE': [6],  # sono contenuti
            'OUTPUT': QgsProcessing.TEMPORARY_OUTPUT
        }
        outputs['Al04b_estrai_ecosistemi_in_buffer_500m'] = processing.run('native:extractbylocation', alg_params, context=context, feedback=feedback, is_child_algorithm=True)

        feedback.setCurrentStep(11)
        if feedback.isCanceled():
            return {}

        # al04d_fusione_aree_influenza_ecosistemi
        alg_params = {
            'CRS': 'ProjectCrs',
            'LAYERS': [outputs['Al04a_estrai_ecosistemi_in_buffer_300m']['OUTPUT'],outputs['Al04b_estrai_ecosistemi_in_buffer_500m']['OUTPUT'],outputs['Al04c_estrai_doline_in_buffer_500m']['OUTPUT']],
            'OUTPUT': parameters['Ecosistemi_e_carsismo_influenzati_da_aree_estrattive']
        }
        outputs['Al04d_fusione_aree_influenza_ecosistemi'] = processing.run('native:mergevectorlayers', alg_params, context=context, feedback=feedback, is_child_algorithm=True)
        results['Ecosistemi_e_carsismo_influenzati_da_aree_estrattive'] = outputs['Al04d_fusione_aree_influenza_ecosistemi']['OUTPUT']

        feedback.setCurrentStep(12)
        if feedback.isCanceled():
            return {}

        # al06_estrazione_cave_maggior_impatto_ambientale
        alg_params = {
            'INPUT': outputs['Al05a_estrazione_aree_pend_media__40']['OUTPUT'],
            'INTERSECT': outputs['Al04d_fusione_aree_influenza_ecosistemi']['OUTPUT'],
            'PREDICATE': [1],  # contiene
            'OUTPUT': parameters['Aree_estrattive_con_maggior_impatto_ambientale']
        }
        outputs['Al06_estrazione_cave_maggior_impatto_ambientale'] = processing.run('native:extractbylocation', alg_params, context=context, feedback=feedback, is_child_algorithm=True)
        results['Aree_estrattive_con_maggior_impatto_ambientale'] = outputs['Al06_estrazione_cave_maggior_impatto_ambientale']['OUTPUT']
        return results

    def name(self):
        return 'Impatto ambientale aree estrattive'

    def displayName(self):
        return 'Impatto ambientale aree estrattive'

    def group(self):
        return 'Analisi ambientali'

    def groupId(self):
        return 'Analisi ambientali'

    def shortHelpString(self):
        return "Modello per la valutazione dell'impatto delle aree estrattive basato su pendenza ed ecosistemi tutelati."
    def createInstance(self):
        return ImpattoAmbientaleAreeEstrattive()

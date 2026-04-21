import { createContext, useContext, useState, useCallback, useEffect, type ReactNode, type FC } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  toggleLanguage: () => void;
}

const translations: Record<Language, Record<string, any>> = {
  es: {
    "common": {
      "backHome": "Regresar al Inicio",
      "backToHome": "Volver al inicio",
      "explore": "Explorar",
      "scroll": "Scroll",
      "requestTechDossier": "Solicitar Dossier Técnico"
    },
    "cookieBanner": {
      "badge": "Tu privacidad importa",
      "title": "Configuración de Cookies",
      "titleHighlight": "Cookies",
      "description": "Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrarte contenido relevante. Puedes aceptar todas, rechazarlas o configurar tus preferencias.",
      "links": {
        "cookiesPolicy": "Política de Cookies",
        "privacy": "Privacidad"
      },
      "cta": {
        "necessary": "Solo necesarias",
        "acceptAll": "Aceptar todas"
      }
    },
    "nosotrosPage": {
      "subtitle": "Nuestro Equipo",
      "title": "Equipo, Compromiso y",
      "titleHighlight": "Pasión por nuestro trabajo",
      "imageAlt": "Equipo Central de Envasados"
    },
    "sectoresPage": {
      "hero": {
        "title": "Sectores de",
        "titleHighlight": "Excelencia",
        "subtitle": "Diseñamos ecosistemas de envasado a medida para las industrias más exigentes del mercado global."
      },
      "scrollLabel": "Scroll",
      "sectors": {
        "cosmetic": {
          "title": "Cosmética y Perfumería",
          "description": "Lideramos la fabricación y envasado de productos cosméticos de alta gama. Nuestra tecnología nos permite manejar texturas delicadas, fragancias exclusivas y envases innovadores.",
          "features": ["Sachets", "Frascos", "Tarros", "Viales"],
          "content": "Precisión absoluta en el manejo de principios activos y fragancias de lujo.",
          "details": [
            { "label": "Control Microbiológico", "value": "Análisis exhaustivo en laboratorio interno propio." },
            { "label": "Dosificación de Alta Precisión", "value": "Llenado exacto desde 1 ml hasta 500 ml con tolerancia mínima." },
            { "label": "Clean Room ISO 22716", "value": "Ambientes controlados bajo estrictos protocolos de pureza." },
            { "label": "Luxury Finishing", "value": "Acabados de lujo y personalización premium para marcas exclusivas." }
          ]
        },
        "sanitary": {
          "title": "Grado Sanitario & Envasado Estéril",
          "description": "Simplificamos la entrada al mercado de productos sanitarios bajo un entorno de seguridad absoluta. Integramos 6 Salas Blancas, Sala de Envasado Estéril y suministro propio de Agua Purificada (700 L/h).",
          "features": ["Envasado Estéril", "Trazabilidad 100%", "Zona de fabricación"],
          "content": "Compromiso inquebrantable con la pureza, certificación ISO 13485 y registro AEMPS.",
          "details": [
            { "label": "Acreditación ISO 13485", "value": "Operamos bajo la norma ISO 13485 y autorización AEMPS." },
            { "label": "Agua Purificada (700 L/h)", "value": "Garantía de calidad aséptica pura desde el origen." },
            { "label": "Trazabilidad Digital 100%", "value": "Sistemas avanzados para seguimiento clínico del lote." },
            { "label": "Envasado Estéril", "value": "Condiciones asépticas estrictas y pureza total." }
          ]
        },
        "food": {
          "title": "Alimentación",
          "description": "Soluciones de envasado innovadoras para el sector alimentario, desde suplementos nutricionales hasta aceites de oliva de alta gama. Especialistas en formatos monodosis.",
          "features": ["Aceite de Oliva", "Complementos alimenticios", "Nutricosmética"],
          "content": "Innovación en conservación activa para preservar la frescura y pureza original.",
          "details": [
            { "label": "Higiene de Grado Alimentario", "value": "Protocolos IFS integrados en cada fase del proceso." },
            { "label": "Especialistas Monodosis", "value": "Formatos inteligentes optimizados para el consumo On-the-Go." },
            { "label": "Protección contra Oxidación", "value": "Materiales barrera que triplican la vida útil del producto." },
            { "label": "Diseño Estructural", "value": "Envases ergonómicos que potencian la experiencia del consumidor." }
          ]
        }
      },
      "badge": {
        "title": "Del Concepto al Mercado: Excelencia en",
        "titleHighlight": "Proyectos 360º",
        "cta": "Solicitar Dossier Técnico"
      }
    },
    "productosPage": {
      "hero": {
        "title": "Formatos de",
        "titleHighlight": "Innovación",
        "subtitle": "Cada producto exige un entorno y una tecnología específicos. Descubre nuestra gama de soluciones de envasado a medida."
      },
      "aemps": {
        "label": "Fabricación Autorizada por la AEMPS",
        "logoAlt": "Logo AEMPS Ministerio"
      },
      "sanitary": {
        "navTitle": "Gama Sanitaria",
        "subtitle": "Certificación sanitaria AEMPS para productos de cuidado especializado (no medicamentos)",
        "heroTitle": "Producto Sanitario. Soluciones de Higiene Avanzada",
        "heroSubtitle": "Rigor Sanitario aplicado al Cuidado Personal Especializado",
        "comparisonTitle": "Capacidades Productivas Actuales",
        "table": {
          "headers": ["Formato", "Especificación Técnica", "Aplicaciones"],
          "rows": [
            {
              "format": "Frascos Oftálmicos",
              "specs": "10 ml / 15 ml · Tapón rosca-clip tipo Aptar · Dosificación gota a gota",
              "apps": "Higiene ocular, lubricantes oculares de confort (no terapéuticos)"
            },
            {
              "format": "Sachets Monodosis",
              "specs": "1 a 10 ml · Toallitas en solución oftalmológica",
              "apps": "Limpieza palpebral, higiene de mantenimiento, wipes especializados"
            }
          ]
        },
        "images": {
          "comfortTitle": "Frascos de Confort Ocular",
          "comfortAlt": "Soluciones de Mantenimiento Ocular",
          "singleDoseTitle": "Monodosis de Precisión",
          "singleDoseAlt": "Monodosis de Higiene Avanzada"
        },
        "regulatoryNote": "Nota regulatoria: Los productos fabricados se clasifican como Productos Sanitarios (MDR 2017/745) o Higiene Avanzada, no como Medicamentos.",
        "reachTitle": "Alcance de Desarrollo",
        "reach": [
          "Soluciones de higiene mucosa (nasal, auricular)",
          "Sueros fisiológicos de autocuidado para higiene diaria",
          "Cuidado personal avanzado de base acuosa purificada"
        ],
        "cta": {
          "title": "¿Tiene una formulación de Producto Sanitario en desarrollo?",
          "description": "Gestionamos el escalado desde lote piloto hasta producción industrial manteniendo la clasificación regulatoria sanitaria (no farmacéutica).",
          "button": "Consultar Viabilidad"
        },
        "legal": {
          "title": "Disclaimer Legal (AEMPS Compliance)",
          "text": "Central de Envasados cuenta con autorización AEMPS para fabricación de Productos Sanitarios (categoría: higiene médica y cuidado personal avanzado). No estamos autorizados para medicamentos de prescripción ni venta libre (OTC). Toda la producción se realiza bajo normativa de Productos Sanitarios."
        },
        "pillars": [
          {
            "id": "01",
            "title": "Pureza Garantizada",
            "description": "Generación in-house de Agua Purificada Ph. Eur. (Farmacopea Europea) con caudal continuo de 700 L/h, garantizando la máxima seguridad en el excipiente acuoso."
          },
          {
            "id": "02",
            "title": "Seguridad Ocular",
            "description": "Especialización en formulaciones de mantenimiento ocular en formato monodosis y multidosis con sistemas de dosificación técnica diseñados para el confort."
          },
          {
            "id": "03",
            "title": "Sin Prescripción",
            "description": "Productos de autocuidado avanzados certificados bajo normativa sanitaria, optimizados para su distribución en canales especializados sin requisitos de receta."
          }
        ]
      },
      "products": {
        "sachets": {
          "navTitle": "Sachets",
          "title": "Sachets",
          "subtitle": "Monodosis Inteligente",
          "description": "El formato más versátil para el consumo On-the-Go. Tecnología multicapa que garantiza máxima barrera y conservación.",
          "specs": {
            "flexibility": { "label": "Flexibilidad", "value": "Formatos planos, con toallita o doypack. Codificación por presión, tinta o láser." },
            "finishes": { "label": "Acabados", "value": "Mate, brillo o acabados técnicos. Acondicionamiento secundario, estuches de grupo o estuches expositores." },
            "dosing": { "label": "Dosificación", "value": "De 1 ml a 100 ml con precisión total. Líquidos, viscosos, polvo y sólidos." },
            "protection": { "label": "Protección", "value": "Materiales barrera específicos (O2, luz)." }
          }
        },
        "bottles": {
          "navTitle": "Frascos",
          "title": "Frascos",
          "subtitle": "Precisión y Estilo",
          "description": "Especialistas en el llenado de frascos para las industrias cosmética, perfumería y alimentaria. Soluciones para texturas densas o fluidas.",
          "specs": {
            "formats": { "label": "Formatos", "value": "Vidrio, plástico, PCR o aluminio. Soluciones para cualquier tipo de etiquetado." },
            "closures": { "label": "Cierres", "value": "Bombas, cuentagotas o tapones de rosca. Estuchado y celofanado." },
            "capacities": { "label": "Capacidades", "value": "Desde viales pequeños hasta gran formato." },
            "safety": { "label": "Seguridad", "value": "Sello de inducción y precintos. Codificación de envases y estuches: tinta o láser." }
          }
        },
        "jars": {
          "navTitle": "Tarros",
          "title": "Tarros",
          "subtitle": "El Tacto de la Calidad",
          "description": "Envasado de alta precisión para cremas, bálsamos y productos densos. Cuidado extremo en la manipulación para evitar burbujas y contaminación.",
          "specs": {
            "filling": { "label": "Llenado", "value": "Tecnología sin contacto para máxima pureza." },
            "presentation": { "label": "Presentación", "value": "Nivelado perfecto y limpieza de bordes." },
            "materials": { "label": "Materiales", "value": "PET, PP, vidrio y acabados lujo." },
            "control": { "label": "Control", "value": "Inspección visual del 100% de tarrinas." }
          }
        },
        "vials": {
          "navTitle": "Viales",
          "title": "Viales",
          "subtitle": "Precisión Milimétrica, Presentación Inmaculada",
          "description": "El formato por excelencia para la cosmética de alto valor y las fragancias de nicho. Desde el 1 ml para muestras exclusivas hasta el 30 ml para formatos travel premium, los viales de cristal neutro combinan la transparencia absoluta del vidrio con la versatilidad funcional que exige el mercado del lujo.",
          "specs": {
            "precision": { "label": "Precisión", "value": "Tolerancias mínimas en productos críticos." },
            "formats": { "label": "Formatos", "value": "Adaptamos el sistema de dosificación al comportamiento del producto: pulverizadores para perfume, stoppers para aceites o bombas airless." },
            "versatility": { "label": "Versatilidad", "value": "Tapón rosca cromado, stopper siliconado, bomba dosificadora, pulverizador micro-spray, roll-on." },
            "presentation": { "label": "Presentación", "value": "Cartelas para muestras, miniaturas, estuchado individual o de colecciones premium." }
          }
        }
      },
      "globalCta": {
        "title": "¿Tiene un proyecto con un formato especial?",
        "highlight": "formato especial",
        "description": "Nuestro equipo puede adaptar nuestras líneas para formatos a medida o desarrollos exclusivos.",
        "button": "Consultar con un especialista"
      }
    },
    "instalacionesPage": {
      "hero": {
        "subtitle": "Arquitectura de Vanguardia",
        "title": "Grado",
        "titleHighlight": "Sanitario",
        "description": "Una infraestructura única en Europa diseñada para superar los estándares de las industrias cosmética, sanitaria y alimentaria.",
        "imageAlt": "Central de Envasados Exterior"
      },
      "stats": [
        { "value": "30", "label": "Líneas de Producción" },
        { "value": "6", "label": "Salas Blancas Certificadas" },
        { "value": "700", "label": "L/h Agua Purificada (Ph. Eur.)" },
        { "value": "+5000", "label": "m² Capacidad Total" }
      ],
      "intro": {
        "badge": "Ingeniería de Procesos",
        "title": "Instalaciones de",
        "titleHighlight": "Vanguardia",
        "description": "Nuestras instalaciones no solo son espacio físico, son herramientas de precisión industrial. Cada m² ha sido proyectado para garantizar la estanqueidad absoluta y la calidad y seguridad en todos los procesos.",
        "imageAlt": "Instalaciones de Vanguardia",
        "cards": [
          { "title": "Monitoreo Ambiental", "description": "Control digital continuo en tiempo real de temperatura y humedad." },
          { "title": "Flujo Unidireccional", "description": "Diseño de procesos anti-error para la prevención de contaminación cruzada." }
        ]
      },
      "mainFacilities": [
        {
          "id": "manufacturing",
          "title": "Fabricación de Grado Sanitario",
          "description": "Fabricación de fórmulas críticas bajo protocolos asépticos y control digital total."
        },
        {
          "id": "cleanrooms",
          "title": "6 Salas Blancas Certificadas",
          "description": "Instalaciones cualificadas para productos sanitarios con control continuo de partículas y carga microbiológica."
        },
        {
          "id": "water",
          "title": "Planta de Agua Purificada (700 L/h)",
          "description": "Garantía de calidad desde el origen. Suministro autónomo para fabricación y limpieza crítica."
        }
      ],
      "specialized": {
        "subtitle": "Especialización Técnica",
        "title": "Áreas",
        "titleHighlight": "Especializadas",
        "capacityLabelTop": "m²",
        "capacityLabelBottom": "Capacidad Total",
        "columns": [
          {
            "title": "Alimentación",
            "items": [
              { "label": "Food Rooms Especializadas", "value": "6" },
              { "label": "Líneas Sachets / Monodosis", "value": "4" },
              { "label": "Líneas Frascos / Botes", "value": "2" }
            ],
            "footer": "Control de humedad activo"
          },
          {
            "title": "Cosmética",
            "items": [
              { "label": "Salas Envasado Dedicadas", "value": "17" },
              { "label": "Líneas de Frascos", "value": "14" },
              { "label": "Líneas Sachets / Sampling", "value": "3" }
            ],
            "footer": "Manipulación texturas lujo"
          },
          {
            "title": "Sanitario",
            "items": [
              { "label": "Salas Blancas (Sachets)", "value": "6" },
              { "label": "Sala Envasado Estéril", "value": "1" },
              { "label": "Reactores Fabricación", "value": "2" }
            ],
            "footer": "Almacén de componentes exclusivo"
          }
        ],
        "bottomCards": [
          { "title": "Capacidad Logística", "description": "3 muelles de carga y descarga con flujo continuo." },
          { "title": "Infraestructura Total", "description": "30 líneas de envasado operativas simultáneamente." }
        ]
      },
      "closingCta": {
        "title": "¿Desea conocer nuestra capacidad tecnológica en detalle?",
        "description": "Estamos a su disposición para ofrecerle toda la información necesaria para que su equipo de calidad conozca cada rincón de nuestra operativa.",
        "button": "Ampliar Información"
      }
    },
    "calidadPage": {
      "hero": {
        "subtitle": "Compromiso con la Excelencia",
        "title": "Garantía de",
        "titleHighlight": "Confianza",
        "titleSuffix": "para Marcas Líderes",
        "quote": "\"No delegamos la calidad; la integramos en cada proceso.\"",
        "imageAlt": "Calidad Central de Envasados"
      },
      "philosophy": {
        "title": "Rigor Normativo y Certificaciones",
        "titleHighlight": "Full Spectrum",
        "p1": "Mantenemos un ecosistema de certificaciones concurrentes que opera como escudo de seguridad legal y reputacional para las marcas más exigentes del mundo.",
        "p2": "Nuestra infraestructura auditada permite fabricar simultáneamente bajo estándares cosméticos, sanitarios y alimentarios sin riesgo de contaminación cruzada ni gaps regulatorios.",
        "imageAlt": "Holograma Certificaciones ISO"
      },
      "precision": {
        "title": "Control de",
        "titleHighlight": "Alta Precisión",
        "subtitle": "Validación constante en cada nodo crítico del proceso para asegurar la excelencia en cada unidad producida.",
        "imageAlt": "Control de Proceso Central de Envasados"
      },
      "nodes": [
        {
          "title": "Laboratorio Microbiológico Propio",
          "description": "Control de carga microbiana, aerobios mesófilos y específicos según especificación. Validación de conservantes y vida útil acelerada."
        },
        {
          "title": "Inspección Visual 100%",
          "description": "Control de proceso continuo. Detección de defectos de sellado, dosificación o partículas antes de salir de línea."
        },
        {
          "title": "Trazabilidad Digital Completa",
          "description": "Trazabilidad y registro: materia prima (proveedor, lote, COA), condiciones de producción y resultados por turno."
        },
        {
          "title": "Estabilidad y Hermeticidad",
          "description": "Control de peso, aspecto y estanqueidad, fugas (vacío) y torque para garantizar la integridad durante toda la vida útil declarada."
        }
      ],
      "certifications": {
        "title": "Matriz de",
        "titleHighlight": "Certificaciones",
        "subtitle": "Cumplimiento multinorma bajo un mismo techo",
        "headers": ["Certificación", "Alcance Técnico", "Valor para tu Marca"],
        "items": [
          {
            "name": "ISO 9001:2015",
            "scope": "Sistema de Gestión de Calidad",
            "value": "Procesos estandarizados, mejora continua documentada y enfoque preventivo de riesgos operativos."
          },
          {
            "name": "GMP AEMPS + ISO 22716",
            "scope": "Buenas Prácticas (Cosmética)",
            "value": "Fabricación bajo inspección de la AEMPS, garantizando inocuidad y trazabilidad farmacéutica."
          },
          {
            "name": "IFS Food",
            "scope": "Seguridad Alimentaria",
            "value": "Cumplimiento de los más altos estándares globales de seguridad y calidad en el procesado de alimentos."
          },
          {
            "name": "ISO 13485",
            "scope": "Productos Sanitarios",
            "value": "Habilitación para fabricar Medical Devices clase I/IIa bajo rigor clínico y normativo."
          },
          {
            "name": "ISO 14001:2015",
            "scope": "Gestión Ambiental",
            "value": "Minimización de residuos y cumplimiento de due diligence ambiental de grupos internacionales."
          },
          {
            "name": "EcoVadis Plata/Dorado",
            "scope": "Evaluación de Sostenibilidad",
            "value": "Acreditación externa de prácticas éticas y ESG para acceso a grandes distribuidores."
          }
        ]
      },
      "audit": {
        "title": "Auditoría",
        "titleHighlight": "Permanente",
        "quote": "\"Las certificaciones son el punto de partida, no la meta.\"",
        "items": [
          {
            "title": "Autoinspecciones Trimestrales",
            "description": "Simulación de auditorías de cliente para detectar puntos de mejora preventiva."
          },
          {
            "title": "Mantenimiento IQ/OQ/PQ",
            "description": "Mantenimiento preventivo validado sobre todos los equipos críticos de la planta."
          },
          {
            "title": "Gestión de Cambios",
            "description": "Documentación rigurosa de cualquier modificación en procesos o infraestructura."
          },
          {
            "title": "Formación Continua",
            "description": "Capacitación obligatoria en salas blancas y protocolos de manipulación aséptica."
          }
        ],
        "cardTitle": "Cobertura Legal 'Full Spectrum'",
        "cardBody": "La combinación de AEMPS (productos sanitarios) + ISO 22716 (cosmética) + ISO 13485 (medical devices) nos permite ofrecer la capacidad única de desarrollar líneas paralelas bajo el mismo techo certificado.",
        "cardQuote": "\"Toda la producción se realiza bajo un mismo ecosistema de calidad, eliminando la duplicidad de auditorías y riesgos regulatorios.\""
      },
      "final": {
        "title": "Tu garantía final:",
        "titleHighlight": "Seguridad Jurídica",
        "description": "Cada producto que sale de nuestras instalaciones lleva implícita la suma de estas validaciones, traducida en seguridad para tu marca y confianza para tu consumidor final.",
        "cta": "Auditar nuestra Planta"
      }
    },
    "nav.inicio": "Inicio",
    "nav.nosotros": "Nosotros",
    "nav.sectores": "Sectores",
    "nav.productos": "Productos",
    "nav.instalaciones": "Instalaciones",
    "nav.calidad": "Calidad",
    "nav.contacto": "Contacto",
    "hero.badge": "Líder Europeo en Co-Packing",
    "hero.title": "Más de 35 años de experiencia",
    "hero.titleHighlight": "como Co‑Packer de marcas líderes a nivel mundial",
    "hero.subtitle": "Infraestructura única en España con capacidad de fabricación y envasado bajo las más estrictas normativas sanitarias, cosméticas y alimentarias.",
    "hero.ctaPrimary": "Descubre nuestras instalaciones",
    "hero.ctaSecondary": "Contactar",
    "hero.stats.lines": "Líneas de Producción",
    "hero.stats.cleanrooms": "Salas Blancas",
    "hero.stats.talent": "Profesionales",
    "hero.stats.experience": "Años de Experiencia",
    "hero.stats.capacity": "Unidades/año",
    "nosotros.title": "Nuestra Historia: El Compromiso con nuestros Clientes",
    "nosotros.subtitle": "Más de 35 años evolucionando con la calidad como objetivo",
    "nosotros.p1": "Fundada hace más de tres décadas como un proyecto familiar, Central de Envasados ha recorrido un camino de crecimiento constante y reinversión tecnológica. Lo que comenzó como una visión local se ha transformado hoy en un referente europeo del co-packing de alta capacidad.",
    "nosotros.p2": "Esta evolución, basada en la reinversión continua y la retención del talento, nos ha permitido escalar sin perder nuestra esencia: más de 250 profesionales especializados gestionan diariamente operaciones críticas desde nuestras mas de 30 salas de envasado, 6 salas blancas certificadas y una sala de envasado estéril, además de nuestra propia planta de agua purificada para la fabricación de productos sanitarios y cosméticos.",
    "nosotros.p3": "Hoy, esa misma esencia familiar —atención al detalle, trato personalizado— convive con el rigor industrial que exigen las firmas cosméticas y farmacéuticas más prestigiosas del mundo, somos el socio invisible que garantiza que su calidad llegue intacta al cliente final. Esa es nuestra historia: crecer sin olvidar que, al final, cada envase lleva el nombre de alguien que confía en nosotros.",
    "nosotros.cta": "Conoce a nuestro equipo",
    "nosotros.stat1": "Crecimiento Sostenido",
    "nosotros.stat2": "Talento Especializado",
    "nosotros.stat3": "Inversión en Tecnología",
    "sectores.title": "Sectores",
    "sectores.subtitle": "Especialización por tipo de industria",
    "sectores.cosmetic.title": "Cosmética, Higiene y Perfumería",
    "sectores.cosmetic.description": "Socio estratégico de las firmas más prestigiosas del sector. Especialistas en el envasado de fragancias de lujo y cosmética de alta gama para marcas líderes a nivel mundial.",
    "sectores.cosmetic.features": ["Líneas dedicadas de alta precisión", "Control de calidad y control de proceso continuo", "Gestión de componentes de lujo"],
    "sectores.sanitary.title": "Productos Sanitarios",
    "sectores.sanitary.description": "Infraestructura especializada para el sector salud. Cumplimiento estricto de normativas internacionales para productos sanitarios.\nÁrea de fabricación y de envasado estéril.",
    "sectores.sanitary.features": ["6 Salas blancas certificadas + 1 Sala Envasado Estéril", "Planta de agua purificada propia con capacidad de 700 L/h", "Control microbiológico continuo"],
    "sectores.food.title": "Alimentación",
    "sectores.food.description": "Soluciones avanzadas para la industria alimentaria, con salas específicas para productos sensibles que requieren control ambiental riguroso.",
    "sectores.food.features": ["Salas climatizadas y con control de humedad activo", "Trazabilidad completa", "Certificaciones alimentarias internacionales"],
    "copacker.subtitle": "CO-PACKER - FULL SERVICE",
    "copacker.title": "Packaging a su Medida - Proyectos 360º",
    "copacker.description": "En Central de Envasados no somos solo un co-packer; somos su socio integral en la materialización de proyectos, eliminando riesgos y gestionando cada fase.",
    "copacker.cta.tech": "Nuestra tecnología",
    "copacker.cta.policy": "Política de gestión",
    "copacker.feature1": "01. Infraestructura Industrial",
    "copacker.feature1.desc": "Capacidad productiva escalable: Operamos entre las mayores capacidades de envasado a terceros de Europa, con 30 líneas dedicadas funcionando simultáneamente. Esta escala nos permite absorber picos de demanda estacional y mantener tiempos de respuesta competitivos sin comprometer la calidad.",
    "copacker.feature2": "02. Versatilidad Tecnológica",
    "copacker.feature2.desc": "Multi-formato, multi-sector: Disponemos de 30 tecnologías de envasado diferenciadas (líneas rotativas, lineales, flow-pack, etiquetado, etc.) que nos permiten pivotar entre formatos cosméticos, sanitarios y alimentarios sin transición crítica. Una misma infraestructura, infinitas configuraciones.",
    "copacker.feature3": "03. Entorno Controlado",
    "copacker.feature3.desc": "Certificación y trazabilidad total: Fabricación en área sanitaria y envasado en 6 Salas Blancas certificadas y una Sala de Envasado Estéril, con planta de generación de agua purificada propia (700 L/h). Eliminamos riesgos de contaminación cruzada y garantizamos la trazabilidad batch desde la materia prima hasta el producto final.",
    "copacker.feature4": "04. Control de Calidad Integrado",
    "copacker.feature4.desc": "Cero defectos en línea: Sistema de inspección y control de proceso continuo, complementado con etiquetado de alta precisión y acondicionamiento secundario. Cada envase es verificado antes de abandonar la línea.",
    "copacker.feature5": "05. Gestión Integral de Packaging",
    "copacker.feature5.desc": "Full Service real: Diseño técnico y sourcing de envases, impresión gráfica industrial y gestión de packaging exterior con red de colaboradores auditados y certificados. Tú aportas la fórmula; nosotros gestionamos todo lo demás.",
    "copacker.feature6": "06. Partnership Operativo",
    "copacker.feature6.desc": "Tu proyecto, nuestro equipo: Asignación de equipos multidisciplinares dedicados por proyecto (IQ, Producción, Calidad) que trabajan en modalidad de extensión de tu departamento de operaciones, no como proveedor externo.",
    "productos.title": "Productos",
    "productos.subtitle": "Soluciones de packaging para cada necesidad",
    "productos.items.sachets.title": "Sachets & Toallitas",
    "productos.items.sachets.description": "Formato ideal para retail y sampling. Económico, versátil, personalizable y eco-friendly.",
    "productos.items.sachets.capacity": "0,1 ML - 100 ML",
    "productos.items.bottles.title": "Frascos",
    "productos.items.bottles.description": "El envase estándar más versátil. Sin limitaciones de formato, capacidad o cierre.",
    "productos.items.bottles.capacity": "0,5 ML - 1 LITRO",
    "productos.items.jars.title": "Tarros y Tarrinas",
    "productos.items.jars.description": "Versatilidad máxima para cosmética y alimentación. Amplia gama de capacidades y acabados.",
    "productos.items.jars.capacity": "5 ML - 500 ML",
    "productos.items.vials.title": "Viales",
    "productos.items.vials.description": "Formato premium para cosmética y farmacia. Gran variedad de cierres especializados.",
    "productos.items.vials.capacity": "1 ML - 30 ML",
    "instalaciones.title": "Instalaciones: Arquitectura de Grado Sanitario",
    "instalaciones.subtitle": "Capacidad Industrial Certificada",
    "instalaciones.manufacturing.title": "Fabricación de Grado Sanitario",
    "instalaciones.manufacturing.description": "Desarrollo de fórmulas críticas bajo protocolos asépticos y control digital total.",
    "instalaciones.cleanrooms.title": "6 Salas Blancas Certificadas",
    "instalaciones.cleanrooms.description": "Instalaciones cualificadas para productos sanitarios con control continuo de partículas y carga microbiológica.",
    "instalaciones.food.title": "6 Food Rooms Especializadas",
    "instalaciones.food.description": "Específicas para alimentación gourmet y nutraceúticos, con control de humedad activo.",
    "instalaciones.sterile.title": "Sala de Envasado Estéril",
    "instalaciones.sterile.description": "Área dedicada exclusivamente al envasado en condiciones asépticas estrictas (Sector Pharma).",
    "instalaciones.water.title": "Planta de Agua Purificada (700 L/h)",
    "instalaciones.water.description": "Garantía de calidad desde el origen. Suministro autónomo para fabricación y limpieza crítica.",
    "instalaciones.warehouse.title": "Logística con Trazabilidad Total",
    "instalaciones.warehouse.description": "Gestión integral de componentes con sistemas de validación de cada lote.",
    "instalaciones.stats.lines": "Líneas de Producción",
    "instalaciones.stats.cleanrooms": "Salas Blancas",
    "instalaciones.stats.water": "L/h Agua Purificada",
    "instalaciones.stats.storage": "m² Almacén",
    "calidad.title": "Rigor Normativo y Certificaciones 'Full Spectrum'",
    "calidad.subtitle": "Garantía de Confianza para Marcas Líderes",
    "calidad.iso.title": "ISO 9001:2015",
    "calidad.iso.description": "Sistema de gestión certificado para garantizar procesos optimizados y resultados consistentes.",
    "calidad.gmp.title": "BPF / GMP (ISO 22716)",
    "calidad.gmp.description": "Cumplimiento estricto de Buenas Prácticas de Fabricación para productos sanitarios y cosméticos.",
    "calidad.process.title": "Control de Calidad de Alta Precisión",
    "calidad.process.description": "Implementamos trazabilidad digital completa y validación clínica en cada fase, asegurando que cada unidad cumpla con los estándares de calidad requeridos.",
    "calidad.process.points": ["Validación microbiológica en laboratorio propio", "Inspección visual del 100% de productos acabados", "Trazabilidad digital completa de cada lote", "Control estricto de estabilidad y hermeticidad"],
    "contacto.title": "Contacto",
    "contacto.subtitle": "HABLEMOS DE TU PRÓXIMO PROYECTO",
    "contacto.form.name": "NOMBRE",
    "contacto.form.email": "EMAIL",
    "contacto.form.company": "EMPRESA",
    "contacto.form.phone": "TELÉFONO",
    "contacto.form.message": "MENSAJE",
    "contacto.form.submit": "ENVIAR MENSAJE",
    "contacto.form.success": "Mensaje enviado correctamente",
    "contacto.form.success.description": "Hemos recibido tu mensaje. Nuestro equipo comercial se pondrá en contacto contigo en menos de 24 horas.",
    "contacto.form.sending": "Enviando...",
    "contacto.form.error": "Error al enviar el mensaje. Por favor, inténtalo de nuevo o contacta directamente por teléfono.",
    "contacto.form.error.invalidEmail": "Por favor, introduce un email válido.",
    "contacto.info.address": "DIRECCIÓN",
    "contacto.info.phone": "TELÉFONO",
    "contacto.info.email": "EMAIL",
    "contacto.info.schedule": "HORARIO",
    "contacto.company.name": "Central de Envasados, S.A.",
    "contacto.company.address": "Polígono Industrial La Garena Sur, Miguel Servet, 10, 28806 Alcalá de Henares (Madrid) ESPAÑA",
    "contacto.company.phone": "+34 918 811 415",
    "contacto.company.email": "contacto@centralenvasados.com",
    "contacto.company.schedule": "Lunes a Viernes: 8:00 - 17:00",
    "footer.description": "Partner estratégico de las principales marcas de cosmética, perfumería y cuidado personal. Más de 35 años de experiencia en fabricación y envasado de precisión.",
    "footer.sections.links": "ENLACES",
    "footer.sections.legal": "LEGAL",
    "footer.iso": "ISO 9001:2015 CERTIFIED",
    "contacto.form.privacyNotice": "Responsable: Central de Envasados, S.A. Finalidad: gestionar tu consulta. Legitimación: tu consentimiento. Puedes ejercer tus derechos escribiendo a contacto@centralenvasados.com.",
    "contacto.form.privacyCheckbox": "He leído y acepto la ",
    "contacto.form.privacyCheckboxLink": "Política de Privacidad",
    "contacto.form.privacyRequired": "Debes aceptar la Política de Privacidad para continuar.",
    "contacto.form.commercialCheckbox": "Acepto recibir comunicaciones comerciales.",
    "footer.legalNotice": "Para ejercer tus derechos de protección de datos o consultar información detallada, accede a nuestra Política de Privacidad.",
    "footer.rights": "TODOS LOS DERECHOS RESERVADOS",
    "footer.legal": "Aviso Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.cookies": "Cookies",
    "footer.ethic": "Canal Ético",
    "footer.management": "Política de Gestión"
  },
  en: {
    "common": {
      "backHome": "Back to Home",
      "backToHome": "Back to home",
      "explore": "Explore",
      "scroll": "Scroll",
      "requestTechDossier": "Request Technical Dossier"
    },
    "cookieBanner": {
      "badge": "Your privacy matters",
      "title": "Cookie Settings",
      "titleHighlight": "Cookies",
      "description": "We use our own and third-party cookies to improve your experience, analyze traffic, and show relevant content. You can accept all, reject, or set your preferences.",
      "links": {
        "cookiesPolicy": "Cookie Policy",
        "privacy": "Privacy"
      },
      "cta": {
        "necessary": "Necessary only",
        "acceptAll": "Accept all"
      }
    },
    "nosotrosPage": {
      "subtitle": "Our Team",
      "title": "Team, commitment and",
      "titleHighlight": "passion for our work",
      "imageAlt": "Central de Envasados team"
    },
    "sectoresPage": {
      "hero": {
        "title": "Sectors of",
        "titleHighlight": "Excellence",
        "subtitle": "We design tailor-made packaging ecosystems for the most demanding industries in the global market."
      },
      "scrollLabel": "Scroll",
      "sectors": {
        "cosmetic": {
          "title": "Cosmetics & Perfumery",
          "description": "We lead the manufacturing and packaging of high-end cosmetic products. Our technology allows us to handle delicate textures, exclusive fragrances, and innovative packs.",
          "features": ["Sachets", "Bottles", "Jars", "Vials"],
          "content": "Absolute precision when handling active ingredients and luxury fragrances.",
          "details": [
            { "label": "Microbiological Control", "value": "Comprehensive testing in our in-house laboratory." },
            { "label": "High-Precision Dosing", "value": "Accurate filling from 1 ml to 500 ml with minimal tolerance." },
            { "label": "ISO 22716 Clean Room", "value": "Controlled environments under strict purity protocols." },
            { "label": "Luxury Finishing", "value": "Luxury finishing and premium customization for exclusive brands." }
          ]
        },
        "sanitary": {
          "title": "Medical-Grade & Sterile Packaging",
          "description": "We simplify market entry for medical-grade products within a zero-compromise safety environment. We integrate 6 Clean Rooms, a Sterile Packaging Room and our own Purified Water supply (700 L/h).",
          "features": ["Sterile Packaging", "100% Traceability", "Manufacturing area"],
          "content": "Unwavering commitment to purity, ISO 13485 certification and AEMPS authorization.",
          "details": [
            { "label": "ISO 13485 Certification", "value": "We operate under ISO 13485 and AEMPS authorization." },
            { "label": "Purified Water (700 L/h)", "value": "Pure aseptic quality assurance from the source." },
            { "label": "100% Digital Traceability", "value": "Advanced systems for batch tracking." },
            { "label": "Sterile Packaging", "value": "Strict aseptic conditions and total purity." }
          ]
        },
        "food": {
          "title": "Food",
          "description": "Innovative packaging solutions for the food sector, from nutritional supplements to premium olive oils. Specialists in single-dose formats.",
          "features": ["Olive Oil", "Food Supplements", "Nutricosmetics"],
          "content": "Innovation in active preservation to protect freshness and original purity.",
          "details": [
            { "label": "Food-Grade Hygiene", "value": "IFS protocols integrated into every stage of the process." },
            { "label": "Single-Dose Specialists", "value": "Smart formats optimized for on-the-go consumption." },
            { "label": "Oxidation Protection", "value": "Barrier materials that significantly extend shelf life." },
            { "label": "Structural Design", "value": "Ergonomic packaging that enhances consumer experience." }
          ]
        }
      },
      "badge": {
        "title": "From Concept to Market: Excellence in",
        "titleHighlight": "360º Projects",
        "cta": "Request Technical Dossier"
      }
    },
    "productosPage": {
      "hero": {
        "title": "Formats for",
        "titleHighlight": "Innovation",
        "subtitle": "Every product requires a specific environment and technology. Explore our range of tailored packaging solutions."
      },
      "aemps": {
        "label": "Manufacturing authorized by AEMPS",
        "logoAlt": "AEMPS Ministry logo"
      },
      "sanitary": {
        "navTitle": "Medical Range",
        "subtitle": "AEMPS authorization for specialized personal-care medical products (not medicines)",
        "heroTitle": "Medical Product. Advanced Hygiene Solutions",
        "heroSubtitle": "Medical rigor applied to specialized personal care",
        "comparisonTitle": "Current Production Capabilities",
        "table": {
          "headers": ["Format", "Technical Specification", "Applications"],
          "rows": [
            {
              "format": "Ophthalmic Bottles",
              "specs": "10 ml / 15 ml · Aptar-type screw-cap/clip · Drop-by-drop dosing",
              "apps": "Eye hygiene, comfort eye lubricants (non-therapeutic)"
            },
            {
              "format": "Single-Dose Sachets",
              "specs": "1 to 10 ml · Wipes in ophthalmic solution",
              "apps": "Eyelid cleansing, maintenance hygiene, specialized wipes"
            }
          ]
        },
        "images": {
          "comfortTitle": "Comfort Eye Bottles",
          "comfortAlt": "Comfort eye solutions",
          "singleDoseTitle": "Precision Single-Dose",
          "singleDoseAlt": "Advanced hygiene single-dose"
        },
        "regulatoryNote": "Regulatory note: Manufactured products are classified as Medical Devices (MDR 2017/745) or Advanced Hygiene, not as Medicines.",
        "reachTitle": "Development Scope",
        "reach": [
          "Mucosal hygiene solutions (nasal, ear)",
          "Self-care saline solutions for daily hygiene",
          "Advanced personal-care products based on purified water"
        ],
        "cta": {
          "title": "Do you have a medical product formulation in development?",
          "description": "We manage scale-up from pilot batch to industrial production while maintaining the medical regulatory classification (non-pharmaceutical).",
          "button": "Check feasibility"
        },
        "legal": {
          "title": "Legal Disclaimer (AEMPS Compliance)",
          "text": "Central de Envasados is authorized by AEMPS to manufacture Medical Products (category: medical hygiene and advanced personal care). We are not authorized for prescription medicines or OTC medicines. All production is carried out under Medical Products regulations."
        },
        "pillars": [
          {
            "id": "01",
            "title": "Guaranteed Purity",
            "description": "In-house generation of Ph. Eur. Purified Water (European Pharmacopoeia) with a continuous flow of 700 L/h, ensuring maximum safety for the aqueous excipient."
          },
          {
            "id": "02",
            "title": "Ocular Safety",
            "description": "Specialization in ocular maintenance formulations in single-dose and multi-dose formats with technical dispensing systems designed for comfort."
          },
          {
            "id": "03",
            "title": "No Prescription",
            "description": "Advanced self-care products certified under medical regulations, optimized for distribution in specialized channels without prescription requirements."
          }
        ]
      },
      "products": {
        "sachets": {
          "navTitle": "Sachets",
          "title": "Sachets",
          "subtitle": "Smart Single-Dose",
          "description": "The most versatile on-the-go format. Multi-layer technology that guarantees maximum barrier protection and preservation.",
          "specs": {
            "flexibility": { "label": "Flexibility", "value": "Flat formats, with wipe or doypack. Coding by embossing, ink or laser." },
            "finishes": { "label": "Finishes", "value": "Matte, gloss or technical finishes. Secondary packaging, multipacks or display cases." },
            "dosing": { "label": "Dosing", "value": "From 1 ml to 100 ml with total precision. Liquids, viscous products, powders and solids." },
            "protection": { "label": "Protection", "value": "Specific barrier materials (O2, light)." }
          }
        },
        "bottles": {
          "navTitle": "Bottles",
          "title": "Bottles",
          "subtitle": "Precision and Style",
          "description": "Specialists in filling bottles for cosmetics, perfumery and food industries. Solutions for dense or fluid textures.",
          "specs": {
            "formats": { "label": "Formats", "value": "Glass, plastic, PCR or aluminum. Solutions for any labeling type." },
            "closures": { "label": "Closures", "value": "Pumps, droppers or screw caps. Boxing and cellophane wrapping." },
            "capacities": { "label": "Capacities", "value": "From small vials to large formats." },
            "safety": { "label": "Safety", "value": "Induction seals and tamper-evident bands. Coding for containers and cartons: ink or laser." }
          }
        },
        "jars": {
          "navTitle": "Jars",
          "title": "Jars",
          "subtitle": "The Touch of Quality",
          "description": "High-precision filling for creams, balms and dense products. Extreme care during handling to avoid bubbles and contamination.",
          "specs": {
            "filling": { "label": "Filling", "value": "Contactless technology for maximum purity." },
            "presentation": { "label": "Presentation", "value": "Perfect leveling and rim cleaning." },
            "materials": { "label": "Materials", "value": "PET, PP, glass and luxury finishes." },
            "control": { "label": "Control", "value": "100% visual inspection of tubs." }
          }
        },
        "vials": {
          "navTitle": "Vials",
          "title": "Vials",
          "subtitle": "Millimetric Precision, Immaculate Presentation",
          "description": "The premium format for high-value cosmetics and niche fragrances. From 1 ml for exclusive samples to 30 ml for premium travel formats, neutral glass vials combine absolute transparency with the functional versatility demanded by the luxury market.",
          "specs": {
            "precision": { "label": "Precision", "value": "Minimal tolerances for critical products." },
            "formats": { "label": "Formats", "value": "We adapt the dispensing system to product behavior: sprayers for perfume, stoppers for oils or airless pumps." },
            "versatility": { "label": "Versatility", "value": "Chrome screw cap, silicone stopper, dosing pump, micro-spray atomizer, roll-on." },
            "presentation": { "label": "Presentation", "value": "Sample cards, miniatures, individual cartons or premium collection packs." }
          }
        }
      },
      "globalCta": {
        "title": "Do you have a project with a special format?",
        "highlight": "special format",
        "description": "Our team can adapt our lines for custom formats or exclusive developments.",
        "button": "Talk to a specialist"
      }
    },
    "instalacionesPage": {
      "hero": {
        "subtitle": "State-of-the-Art Architecture",
        "title": "Medical",
        "titleHighlight": "Grade",
        "description": "A unique infrastructure in Europe designed to exceed the standards of the cosmetic, medical and food industries.",
        "imageAlt": "Central de Envasados exterior"
      },
      "stats": [
        { "value": "30", "label": "Production Lines" },
        { "value": "6", "label": "Certified Clean Rooms" },
        { "value": "700", "label": "L/h Purified Water (Ph. Eur.)" },
        { "value": "+5000", "label": "m² Total Capacity" }
      ],
      "intro": {
        "badge": "Process Engineering",
        "title": "State-of-the-Art",
        "titleHighlight": "Facilities",
        "description": "Our facilities are not just physical space; they are industrial precision tools. Every m² has been designed to guarantee absolute tightness, quality and safety across all processes.",
        "imageAlt": "State-of-the-art facilities",
        "cards": [
          { "title": "Environmental Monitoring", "description": "Continuous real-time digital monitoring of temperature and humidity." },
          { "title": "Unidirectional Flow", "description": "Error-proof process design to prevent cross-contamination." }
        ]
      },
      "mainFacilities": [
        {
          "id": "manufacturing",
          "title": "Medical-Grade Manufacturing",
          "description": "Critical formula manufacturing under aseptic protocols and full digital control."
        },
        {
          "id": "cleanrooms",
          "title": "6 Certified Clean Rooms",
          "description": "Qualified facilities for medical products with continuous particle and microbiological load control."
        },
        {
          "id": "water",
          "title": "Purified Water Plant (700 L/h)",
          "description": "Quality assurance from the source. Autonomous supply for manufacturing and critical cleaning."
        }
      ],
      "specialized": {
        "subtitle": "Technical Specialization",
        "title": "Specialized",
        "titleHighlight": "Areas",
        "capacityLabelTop": "m²",
        "capacityLabelBottom": "Total Capacity",
        "columns": [
          {
            "title": "Food",
            "items": [
              { "label": "Specialized Food Rooms", "value": "6" },
              { "label": "Sachet / Single-Dose Lines", "value": "4" },
              { "label": "Bottle / Jar Lines", "value": "2" }
            ],
            "footer": "Active humidity control"
          },
          {
            "title": "Cosmetics",
            "items": [
              { "label": "Dedicated Packaging Rooms", "value": "17" },
              { "label": "Bottle Lines", "value": "14" },
              { "label": "Sachet / Sampling Lines", "value": "3" }
            ],
            "footer": "Luxury texture handling"
          },
          {
            "title": "Medical",
            "items": [
              { "label": "Clean Rooms (Sachets)", "value": "6" },
              { "label": "Sterile Packaging Room", "value": "1" },
              { "label": "Manufacturing Reactors", "value": "2" }
            ],
            "footer": "Exclusive component warehouse"
          }
        ],
        "bottomCards": [
          { "title": "Logistics Capacity", "description": "3 loading/unloading docks with continuous flow." },
          { "title": "Total Infrastructure", "description": "30 packaging lines operating simultaneously." }
        ]
      },
      "closingCta": {
        "title": "Would you like to know our technological capacity in detail?",
        "description": "We are available to provide all the information your quality team needs to understand every part of our operation.",
        "button": "Request more information"
      }
    },
    "calidadPage": {
      "hero": {
        "subtitle": "Commitment to Excellence",
        "title": "A guarantee of",
        "titleHighlight": "Trust",
        "titleSuffix": "for Leading Brands",
        "quote": "\"We don’t delegate quality; we integrate it into every process.\"",
        "imageAlt": "Quality - Central de Envasados"
      },
      "philosophy": {
        "title": "Regulatory Rigor and Certifications",
        "titleHighlight": "Full Spectrum",
        "p1": "We maintain a concurrent certification ecosystem that acts as a shield of legal and reputational security for the world’s most demanding brands.",
        "p2": "Our audited infrastructure allows us to manufacture simultaneously under cosmetic, medical and food standards without cross-contamination risk or regulatory gaps.",
        "imageAlt": "ISO certifications hologram"
      },
      "precision": {
        "title": "High-Precision",
        "titleHighlight": "Control",
        "subtitle": "Continuous validation at every critical node of the process to ensure excellence in every unit produced.",
        "imageAlt": "Process control - Central de Envasados"
      },
      "nodes": [
        {
          "title": "In-House Microbiological Laboratory",
          "description": "Control of microbial load, aerobic mesophiles and specific tests as per specification. Preservative validation and accelerated shelf-life testing."
        },
        {
          "title": "100% Visual Inspection",
          "description": "Continuous process control. Detection of sealing defects, dosing issues or particles before leaving the line."
        },
        {
          "title": "Full Digital Traceability",
          "description": "Traceability and records: raw materials (supplier, batch, COA), production conditions and shift results."
        },
        {
          "title": "Stability and Airtightness",
          "description": "Weight, appearance and tightness control, leak testing (vacuum) and torque to ensure integrity throughout the declared shelf life."
        }
      ],
      "certifications": {
        "title": "Certification",
        "titleHighlight": "Matrix",
        "subtitle": "Multi-standard compliance under one roof",
        "headers": ["Certification", "Technical Scope", "Value for Your Brand"],
        "items": [
          {
            "name": "ISO 9001:2015",
            "scope": "Quality Management System",
            "value": "Standardized processes, documented continuous improvement and preventive risk management."
          },
          {
            "name": "AEMPS GMP + ISO 22716",
            "scope": "Good Practices (Cosmetics)",
            "value": "Manufacturing under AEMPS inspection, ensuring safety and pharma-grade traceability."
          },
          {
            "name": "IFS Food",
            "scope": "Food Safety",
            "value": "Compliance with the highest global standards for food processing safety and quality."
          },
          {
            "name": "ISO 13485",
            "scope": "Medical Products",
            "value": "Qualification to manufacture Class I/IIa medical devices under rigorous clinical and regulatory standards."
          },
          {
            "name": "ISO 14001:2015",
            "scope": "Environmental Management",
            "value": "Waste minimization and environmental due diligence required by international groups."
          },
          {
            "name": "EcoVadis Silver/Gold",
            "scope": "Sustainability Rating",
            "value": "External accreditation of ethical and ESG practices for access to major retailers."
          }
        ]
      },
      "audit": {
        "title": "Continuous",
        "titleHighlight": "Audit",
        "quote": "\"Certifications are the starting point, not the finish line.\"",
        "items": [
          {
            "title": "Quarterly Self-Inspections",
            "description": "Client-audit simulations to identify preventive improvement opportunities."
          },
          {
            "title": "IQ/OQ/PQ Maintenance",
            "description": "Validated preventive maintenance across all critical plant equipment."
          },
          {
            "title": "Change Control",
            "description": "Rigorous documentation of any process or infrastructure modification."
          },
          {
            "title": "Continuous Training",
            "description": "Mandatory training in clean rooms and aseptic handling protocols."
          }
        ],
        "cardTitle": "Full Spectrum Legal Coverage",
        "cardBody": "The combination of AEMPS (medical products) + ISO 22716 (cosmetics) + ISO 13485 (medical devices) enables the unique capability to run parallel lines under the same certified roof.",
        "cardQuote": "\"All production is carried out within a single quality ecosystem, eliminating duplicate audits and regulatory risks.\""
      },
      "final": {
        "title": "Your final guarantee:",
        "titleHighlight": "Legal Security",
        "description": "Every product leaving our facilities carries the sum of these validations, translated into security for your brand and trust for your end consumer.",
        "cta": "Audit our plant"
      }
    },
    "nav.inicio": "Home",
    "nav.nosotros": "About Us",
    "nav.sectores": "Sectors",
    "nav.productos": "Products",
    "nav.instalaciones": "Facilities",
    "nav.calidad": "Quality",
    "nav.contacto": "Contact",
    "hero.badge": "European Co-Packing Leader",
    "hero.title": "Over 35 years of experience",
    "hero.titleHighlight": "as a Co-Packer for world-leading brands",
    "hero.subtitle": "Unique infrastructure in Spain with manufacturing and packaging capacity under the strictest sanitary, cosmetic, and food regulations.",
    "hero.ctaPrimary": "Discover our facilities",
    "hero.ctaSecondary": "Contact us",
    "hero.stats.lines": "Production Lines",
    "hero.stats.cleanrooms": "Clean Rooms",
    "hero.stats.talent": "Specialized Personnel",
    "hero.stats.experience": "Years of Experience",
    "hero.stats.capacity": "Units/year",
    "nosotros.title": "Our History: Commitment to our Clients",
    "nosotros.subtitle": "Over 35 years evolving with quality as our goal",
    "nosotros.p1": "Founded over three decades ago as a family project, Central de Envasados has traveled a path of constant growth and technological reinvestment. What began as a local vision has today transformed into a European benchmark for high-capacity co-packing.",
    "nosotros.p2": "This evolution, based on continuous reinvestment and talent retention, has allowed us to scale without losing our essence: more than 250 specialized professionals daily manage critical operations from our more than 30 packaging rooms, 6 certified clean rooms and one sterile packaging room, and our own purified water plant for the manufacture of healthcare and cosmetic products.",
    "nosotros.p3": "Today, that same family essence —attention to detail, personalized treatment— coexists with the industrial rigor demanded by the world's most prestigious cosmetic and pharmaceutical firms. We are the invisible partner that ensures their quality reaches the final customer intact. That is our story: growing without forgetting that, in the end, each package bears the name of someone who trusts us.",
    "nosotros.cta": "Meet our team",
    "nosotros.stat1": "Sustained Growth",
    "nosotros.stat2": "Specialized Talent",
    "nosotros.stat3": "Technology Investment",
    "sectores.title": "Sectors",
    "sectores.subtitle": "Specialization by industry",
    "sectores.cosmetic.title": "Cosmetics, Hygiene & Perfumery",
    "sectores.cosmetic.description": "Strategic partner for the most prestigious firms in the sector. Specialists in packaging luxury fragrances and high-end cosmetics for world-leading brands.",
    "sectores.cosmetic.features": ["High-precision dedicated lines", "Quality control and continuous process monitoring", "Luxury component management"],
    "sectores.sanitary.title": "Sanitary Products",
    "sectores.sanitary.description": "Specialized infrastructure for the health sector. Strict compliance with international regulations for sanitary products.\nManufacturing area and sterile packaging.",
    "sectores.sanitary.features": ["6 Certified clean rooms + 1 Sterile Room", "Own purified water plant with 700 L/h capacity", "Continuous microbiological control"],
    "sectores.food.title": "Food",
    "sectores.food.description": "Advanced solutions for the food industry, with specific rooms for sensitive products requiring rigorous environmental control.",
    "sectores.food.features": ["Climate-controlled rooms with active humidity control", "Full traceability", "International food certifications"],
    "copacker.subtitle": "CO-PACKER - FULL SERVICE",
    "copacker.title": "Custom Packaging - 360º Projects",
    "copacker.description": "At Central de Envasados, we are not just a co-packer; we are your integral partner in project materialization, eliminating risks and managing every phase.",
    "copacker.cta.tech": "Our Technology",
    "copacker.cta.policy": "Management Policy",
    "copacker.feature1": "01. Industrial Infrastructure",
    "copacker.feature1.desc": "Scalable production capacity: We operate among the largest third-party packaging capacities in Europe, with 30 dedicated lines running simultaneously. This scale allows us to absorb seasonal demand peaks and maintain competitive response times without compromising quality.",
    "copacker.feature2": "02. Technological Versatility",
    "copacker.feature2.desc": "Multi-format, multi-sector: We have 30 differentiated packaging technologies (rotary, linear, flow-pack, labeling lines, etc.) that allow us to pivot between cosmetic, sanitary, and food formats without critical transition. One infrastructure, infinite configurations.",
    "copacker.feature3": "03. Controlled Environment",
    "copacker.feature3.desc": "Total certification and traceability: Manufacturing in sanitary areas and packaging in 6 certified Clean Rooms and one Sterile Packaging Room, with own purified water generation plant (700 L/h). We eliminate cross-contamination risks and guarantee batch traceability from raw material to final product.",
    "copacker.feature4": "04. Integrated Quality Control",
    "copacker.feature4.desc": "Zero defects on line: Continuous process inspection and control system, complemented by high-precision labeling and secondary packaging. Each package is verified before leaving the line.",
    "copacker.feature5": "05. Integral Packaging Management",
    "copacker.feature5.desc": "Real Full Service: Technical design and container sourcing, industrial graphic printing, and outer packaging management with a network of audited and certified collaborators. You bring the formula; we manage everything else.",
    "copacker.feature6": "06. Operational Partnership",
    "copacker.feature6.desc": "Your project, our team: Assignment of dedicated multidisciplinary teams per project (IQ, Production, Quality) that work as an extension of your operations department, not as an external provider.",
    "productos.title": "Products",
    "productos.subtitle": "Packaging solutions for every need",
    "productos.items.sachets.title": "Sachets & Wipes",
    "productos.items.sachets.description": "Ideal format for retail and sampling. Economical, versatile, customizable, and eco-friendly.",
    "productos.items.sachets.capacity": "0.1 ML - 100 ML",
    "productos.items.bottles.title": "Bottles",
    "productos.items.bottles.description": "The most versatile standard format. No limitations on format, capacity, or closure.",
    "productos.items.bottles.capacity": "0.5 ML - 1 LITER",
    "productos.items.jars.title": "Jars and Tubs",
    "productos.items.jars.description": "Maximum versatility for cosmetics and food. Wide range of capacities and finishes.",
    "productos.items.jars.capacity": "5 ML - 500 ML",
    "productos.items.vials.title": "Vials",
    "productos.items.vials.description": "Premium format for cosmetics and pharmacy. Wide variety of specialized closures.",
    "productos.items.vials.capacity": "1 ML - 30 ML",
    "instalaciones.title": "Facilities: Sanitary Grade Architecture",
    "instalaciones.subtitle": "Certified Industrial Capacity",
    "instalaciones.manufacturing.title": "Sanitary Grade Manufacturing",
    "instalaciones.manufacturing.description": "Critical formula development under aseptic protocols and total digital control.",
    "instalaciones.cleanrooms.title": "6 Certified Clean Rooms",
    "instalaciones.cleanrooms.description": "Qualified facilities for medical devices with continuous particle and microbiological control.",
    "instalaciones.food.title": "6 Specialized Food Rooms",
    "instalaciones.food.description": "Specific for gourmet food and nutraceuticals, with active humidity control.",
    "instalaciones.sterile.title": "Sterile Packaging Room",
    "instalaciones.sterile.description": "Area exclusively dedicated to packaging under strict aseptic conditions (Pharma Sector).",
    "instalaciones.water.title": "Purified Water Plant (700 L/h)",
    "instalaciones.water.description": "Quality assurance from the source. Autonomous supply for manufacturing and critical cleaning.",
    "instalaciones.warehouse.title": "Logistics with Total Traceability",
    "instalaciones.warehouse.description": "Comprehensive component management with clinical validation systems for each batch.",
    "instalaciones.stats.lines": "Production Lines",
    "instalaciones.stats.cleanrooms": "Clean Rooms",
    "instalaciones.stats.water": "L/h Purified Water",
    "instalaciones.stats.storage": "m² Warehouse",
    "calidad.title": "Regulatory Rigor and Full Spectrum Certifications",
    "calidad.subtitle": "Trust Guarantee for Leading Brands",
    "calidad.iso.title": "ISO 9001:2015",
    "calidad.iso.description": "Certified management system to ensure optimized processes and consistent results.",
    "calidad.gmp.title": "GMP (ISO 22716)",
    "calidad.gmp.description": "Strict compliance with Good Manufacturing Practices for medical and cosmetic products.",
    "calidad.process.title": "High-Precision Quality Control",
    "calidad.process.description": "We implement full digital traceability and clinical validation in every phase, ensuring each unit meets pharmaceutical purity standards.",
    "calidad.process.points": ["Microbiological validation in own lab", "100% visual inspection of finished products", "Full digital traceability for each batch", "Strict stability and airtightness control"],
    "contacto.title": "Contact",
    "contacto.subtitle": "Let's talk about your next project",
    "contacto.form.name": "Name",
    "contacto.form.email": "Email",
    "contacto.form.company": "Company",
    "contacto.form.phone": "Phone",
    "contacto.form.message": "Message",
    "contacto.form.submit": "Send message",
    "contacto.form.success": "Message sent successfully",
    "contacto.form.success.description": "We have received your message. Our commercial team will contact you within 24 hours.",
    "contacto.form.sending": "Sending...",
    "contacto.form.error": "Failed to send the message. Please try again or contact us directly by phone.",
    "contacto.form.error.invalidEmail": "Please enter a valid email address.",
    "contacto.info.address": "Address",
    "contacto.info.phone": "Phone",
    "contacto.info.email": "Email",
    "contacto.info.schedule": "Schedule",
    "contacto.company.name": "Central de Envasados, S.A.",
    "contacto.company.address": "Polígono Industrial La Garena Sur, Miguel Servet, 10, 28806 Alcalá de Henares (Madrid)",
    "contacto.company.phone": "918 811 415",
    "contacto.company.email": "contacto@centralenvasados.com",
    "contacto.company.schedule": "Monday to Friday: 8:00 - 17:00",
    "contacto.form.privacyNotice": "Data Controller: Central de Envasados, S.A. Purpose: to manage your enquiry. Legal basis: your consent. You may exercise your rights by writing to contacto@centralenvasados.com.",
    "contacto.form.privacyCheckbox": "I have read and accept the ",
    "contacto.form.privacyCheckboxLink": "Privacy Policy",
    "contacto.form.privacyRequired": "You must accept the Privacy Policy to continue.",
    "contacto.form.commercialCheckbox": "I agree to receive commercial communications.",
    "footer.legalNotice": "To exercise your data protection rights or view detailed information, please see our Privacy Policy.",
    "footer.rights": "All rights reserved",
    "footer.legal": "Legal Notice",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookies",
    "footer.ethic": "Ethics Channel",
    "footer.management": "Management Policy"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string) => {
    return translations[language][key] || key;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Legal copy for the chatbot service (privacy policy + terms of service).
//
// Inline markup used in strings: **bold** and [text](target), where target is
// `privacy[#id]`, `terms[#id]`, `mailto:…` or an absolute URL (see
// LegalPage.tsx). Section ids are identical in both languages so anchors such
// as /privacidad#eliminacion-de-datos stay stable (Meta's data deletion URL).
//
// The retention periods (30 days, 15 business days) and the liability cap
// (3 months) are drafting defaults to be confirmed with Connecta's lawyer.

export type Block =
  | { p: string }
  | { ul: string[] }
  | { table: { head: [string, string]; rows: [string, string][] } };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface LegalDoc {
  title: string;
  intro: string;
  sections: Section[];
}

export interface LegalCopy {
  updatedLabel: string;
  updated: string;
  translationNote?: string;
  privacy: LegalDoc;
  terms: LegalDoc;
}

const es: LegalCopy = {
  updatedLabel: 'Última actualización',
  updated: '14 de octubre de 2026',
  privacy: {
    title: 'Política de privacidad',
    intro:
      'Connecta («Connecta», «nosotros») ofrece a empresas, organizaciones y profesionales («Clientes») un asistente que responde mensajes de WhatsApp y una bandeja para que su equipo continúe la conversación. Esta política explica qué datos tratamos, para qué, con quién los compartimos y qué derechos tienes.',
    sections: [
      {
        id: 'responsable',
        title: '1. Quién es responsable de los datos',
        blocks: [
          {
            ul: [
              '**El Cliente** que conecta su número de WhatsApp decide qué se hace con los mensajes y los datos de las personas que le escriben. Es el responsable del tratamiento frente a ellas.',
              '**Connecta** actúa por cuenta del Cliente: almacena y procesa los datos para prestar el servicio y no los usa para fines propios, salvo lo indicado en la sección 4.',
              'Para los datos de las personas que usan nuestra aplicación web (el equipo del Cliente), Connecta es responsable.',
            ],
          },
        ],
      },
      {
        id: 'datos',
        title: '2. Qué datos tratamos',
        blocks: [
          {
            table: {
              head: ['Origen', 'Datos'],
              rows: [
                [
                  'Personas que escriben por WhatsApp',
                  'Número de teléfono, nombre de perfil de WhatsApp, contenido de los mensajes (texto, audios, imágenes, documentos), fecha y hora, estado de entrega y lectura',
                ],
                [
                  'Registros del Cliente',
                  'Nombre, apellido, teléfono y otros datos de contacto o historial que el Cliente ya tiene en su sistema, cuando se vincula una conversación a un contacto',
                ],
                [
                  'Equipo del Cliente',
                  'Nombre, correo, rol, acciones en la bandeja (tomar, responder, devolver)',
                ],
                [
                  'Conexión con Meta',
                  'Identificadores de la cuenta y del número de WhatsApp Business, nombre visible, calidad del número y un token de acceso, que guardamos cifrado',
                ],
              ],
            },
          },
          {
            p: 'No pedimos ni inferimos datos sensibles (por ejemplo, de salud) por nuestra cuenta. Si una persona los escribe en un mensaje, quedan en la conversación como cualquier otro contenido y el Cliente es responsable de su tratamiento.',
          },
        ],
      },
      {
        id: 'finalidades',
        title: '3. Para qué los usamos',
        blocks: [
          {
            ul: [
              'Recibir y enviar mensajes de WhatsApp en nombre del Cliente.',
              'Generar respuestas automáticas con inteligencia artificial a partir del contenido que el propio Cliente configuró (servicios, precios, horarios u otra información).',
              'Pasar la conversación al equipo cuando el asistente no debe o no puede responder, y avisar al personal.',
              'Mostrar el historial y el contexto del contacto en la bandeja.',
              'Mantener la seguridad del servicio, prevenir abuso y cumplir obligaciones legales.',
            ],
          },
        ],
      },
      {
        id: 'ia',
        title: '4. Inteligencia artificial',
        blocks: [
          {
            ul: [
              'Un modelo de lenguaje procesa el texto de los mensajes entrantes y el contenido configurado por el Cliente para redactar la respuesta o decidir el traspaso al equipo.',
              'El asistente no sustituye el criterio profesional ni da asesoría médica, legal, financiera u otra asesoría especializada; ante una consulta de ese tipo pasa la conversación al equipo.',
              'Los proveedores de IA procesan el texto para devolvernos la respuesta. Accedemos a ellos mediante interfaces de programación (API) y no autorizamos que los mensajes de las personas se usen para entrenar sus modelos.',
              'El Cliente puede apagar el asistente en cualquier momento desde Ajustes.',
            ],
          },
        ],
      },
      {
        id: 'comparticion',
        title: '5. Con quién compartimos los datos',
        blocks: [
          {
            ul: [
              '**Meta Platforms (WhatsApp Business Platform):** transporta los mensajes y es responsable de su propio tratamiento según las [políticas de WhatsApp](https://www.whatsapp.com/legal/business-policy).',
              '**Proveedores de infraestructura y de IA** que nos prestan servicio bajo acuerdos de confidencialidad: alojamiento, base de datos y modelo de lenguaje.',
              '**Autoridades**, cuando una ley u orden válida lo exija.',
            ],
          },
          { p: 'No vendemos datos personales ni los usamos para publicidad.' },
        ],
      },
      {
        id: 'conservacion',
        title: '6. Dónde y cuánto tiempo los conservamos',
        blocks: [
          {
            ul: [
              'Los datos se guardan en servidores de nuestros proveedores de infraestructura, ubicados en Atlanta, Estados Unidos.',
              'Las conversaciones se conservan mientras el Cliente mantenga su cuenta. Al desconectar WhatsApp, el historial se conserva y el servicio deja de procesar mensajes nuevos.',
              'Los archivos adjuntos (imágenes, audios, documentos) están disponibles en la bandeja durante 7 días, que es el plazo en que Meta mantiene el archivo.',
              'Al cerrar la cuenta o a petición del Cliente, eliminamos los datos en un plazo máximo de 30 días, salvo lo que debamos conservar por ley.',
            ],
          },
        ],
      },
      {
        id: 'seguridad',
        title: '7. Seguridad',
        blocks: [
          {
            p: 'Usamos conexiones cifradas, tokens de acceso cifrados en reposo, acceso por Cliente (un Cliente no ve datos de otro) y verificación de la firma de cada notificación que recibimos de Meta. Ningún sistema es infalible; si detectamos un incidente que afecte tus datos, lo notificaremos al Cliente sin demora.',
          },
        ],
      },
      {
        id: 'derechos',
        title: '8. Tus derechos',
        blocks: [
          {
            p: 'Puedes pedir acceso, rectificación o eliminación de tus datos, y oponerte a su tratamiento. Escríbenos a [soporte@connectaia.com](mailto:soporte@connectaia.com).',
          },
        ],
      },
      {
        id: 'eliminacion-de-datos',
        title: '9. Eliminación de datos',
        blocks: [
          {
            p: 'Para solicitar la eliminación de tus datos, escribe a [soporte@connectaia.com](mailto:soporte@connectaia.com) desde el correo asociado a tu cuenta, o indica el número de teléfono de WhatsApp que usaste y la empresa u organización con la que hablaste. Responderemos en un máximo de 15 días hábiles.',
          },
        ],
      },
      {
        id: 'menores',
        title: '10. Menores de edad',
        blocks: [
          {
            p: 'El servicio está dirigido a empresas y organizaciones. Cuando un menor de edad escribe, lo hace por lo general a través de sus padres o tutores, y el Cliente decide cómo tratar esos mensajes.',
          },
        ],
      },
      {
        id: 'cambios',
        title: '11. Cambios y contacto',
        blocks: [
          {
            p: 'Si cambiamos esta política, publicaremos la nueva versión con su fecha. Para cualquier duda: [soporte@connectaia.com](mailto:soporte@connectaia.com).',
          },
        ],
      },
    ],
  },
  terms: {
    title: 'Términos de servicio',
    intro:
      'Estos términos regulan el uso del asistente de WhatsApp y de la bandeja de Connecta por parte de empresas, organizaciones y profesionales («el Cliente»). Al conectar un número o usar el servicio, el Cliente los acepta.',
    sections: [
      {
        id: 'servicio',
        title: '1. El servicio',
        blocks: [
          {
            p: 'Connecta ofrece: (a) un asistente que responde por WhatsApp con base en el contenido que el Cliente configura; (b) una bandeja donde el equipo ve las conversaciones, las toma, responde y las devuelve al asistente; y (c) la conexión del número de WhatsApp Business del Cliente mediante el registro integrado de Meta.',
          },
        ],
      },
      {
        id: 'cuenta',
        title: '2. Cuenta y conexión con WhatsApp',
        blocks: [
          {
            ul: [
              'El Cliente debe ser titular del número que conecta y contar con autorización para usarlo.',
              'La conexión requiere una cuenta de WhatsApp Business y aceptar los términos de Meta. Connecta no controla las decisiones de Meta (aprobación del nombre, calidad del número, límites o suspensiones).',
              'El Cliente puede desconectar el número en cualquier momento desde Ajustes. El historial se conserva y el servicio deja de procesar mensajes nuevos.',
            ],
          },
        ],
      },
      {
        id: 'responsabilidades',
        title: '3. Responsabilidades del Cliente',
        blocks: [
          {
            ul: [
              'Configurar contenido veraz y actualizado (servicios, precios, horarios u otra información). El asistente solo responde con lo que el Cliente cargó.',
              'Revisar y atender las conversaciones que el asistente pasa al equipo, en especial las marcadas como urgentes.',
              'Informar a las personas que le escriben que los mensajes pueden ser atendidos por un asistente de inteligencia artificial y obtener los consentimientos que la ley exija para tratar sus datos.',
              'Cumplir las políticas de WhatsApp Business y la normativa aplicable a su actividad y sector, incluida la de protección de datos.',
            ],
          },
        ],
      },
      {
        id: 'uso-aceptable',
        title: '4. Uso aceptable',
        blocks: [
          {
            p: 'No está permitido usar el servicio para enviar spam o mensajes no solicitados, para actividades ilegales o engañosas, para contenido que Meta prohíba, ni para intentar acceder a datos de otros Clientes o alterar el servicio.',
          },
        ],
      },
      {
        id: 'ia',
        title: '5. Inteligencia artificial y sus límites',
        blocks: [
          {
            ul: [
              'Las respuestas automáticas pueden contener errores. El asistente no sustituye el criterio profesional ni da diagnósticos, tratamientos ni asesoría médica, legal, financiera u otra asesoría especializada.',
              'Ante una consulta que requiera criterio profesional, una emergencia o un mensaje que no entiende, el asistente pasa la conversación al equipo. El Cliente debe contar con personal que la atienda.',
              'El asistente no está pensado para emergencias. Quien tenga una urgencia debe llamar a los servicios de emergencia.',
            ],
          },
        ],
      },
      {
        id: 'datos',
        title: '6. Datos y confidencialidad',
        blocks: [
          {
            p: 'El tratamiento de datos personales se rige por la [Política de privacidad](privacy). El Cliente conserva la titularidad de sus conversaciones y contenido; Connecta solo los usa para prestar el servicio.',
          },
        ],
      },
      {
        id: 'precio',
        title: '7. Precio y pago',
        blocks: [
          {
            p: 'El precio del servicio y sus condiciones de pago no son fijos: se definen con cada Cliente al momento de contratar, conforme a lo que ambas partes acuerden, y quedan establecidos en la propuesta o el acuerdo correspondiente. Cualquier cambio posterior se acordará con el Cliente o se le notificará con anticipación razonable.',
          },
        ],
      },
      {
        id: 'disponibilidad',
        title: '8. Disponibilidad',
        blocks: [
          {
            p: 'Procuramos que el servicio esté disponible de forma continua, pero puede interrumpirse por mantenimiento, fallas propias o de terceros (por ejemplo, Meta o proveedores de infraestructura). No garantizamos disponibilidad ininterrumpida.',
          },
        ],
      },
      {
        id: 'responsabilidad',
        title: '9. Limitación de responsabilidad',
        blocks: [
          {
            p: 'En la medida que la ley lo permita, Connecta no responde por daños indirectos, pérdida de clientes o ingresos, ni por decisiones tomadas con base en respuestas automáticas. La responsabilidad total de Connecta frente al Cliente se limita a lo pagado por el servicio en los 3 meses anteriores al hecho.',
          },
        ],
      },
      {
        id: 'terminacion',
        title: '10. Suspensión y terminación',
        blocks: [
          {
            p: 'El Cliente puede dejar de usar el servicio cuando quiera. Connecta puede suspenderlo si se incumplen estos términos, si Meta suspende el número o si hay riesgo para la seguridad. Al terminar, los datos se tratan según la sección 6 de la [Política de privacidad](privacy#conservacion).',
          },
        ],
      },
      {
        id: 'cambios',
        title: '11. Cambios, ley aplicable y contacto',
        blocks: [
          {
            p: 'Podemos actualizar estos términos y avisaremos al Cliente con anticipación razonable. Se rigen por las leyes de la República de Guatemala y cualquier controversia se someterá a los tribunales competentes de la ciudad de Guatemala. Contacto: [soporte@connectaia.com](mailto:soporte@connectaia.com).',
          },
        ],
      },
    ],
  },
};

const en: LegalCopy = {
  updatedLabel: 'Last updated',
  updated: 'October 14, 2026',
  translationNote:
    'This English version is a courtesy translation. If it differs from the Spanish version, the Spanish version prevails.',
  privacy: {
    title: 'Privacy Policy',
    intro:
      'Connecta (“Connecta”, “we”) offers businesses, organizations and professionals (“Customers”) an assistant that answers WhatsApp messages and an inbox where their team can continue the conversation. This policy explains what data we process, why, who we share it with and what rights you have.',
    sections: [
      {
        id: 'responsable',
        title: '1. Who is responsible for the data',
        blocks: [
          {
            ul: [
              '**The Customer** that connects its WhatsApp number decides what is done with the messages and data of the people who write to it. It is the data controller towards those people.',
              '**Connecta** acts on behalf of the Customer: we store and process the data to provide the service and do not use it for our own purposes, except as stated in section 4.',
              'For the data of people who use our web application (the Customer’s team), Connecta is the controller.',
            ],
          },
        ],
      },
      {
        id: 'datos',
        title: '2. What data we process',
        blocks: [
          {
            table: {
              head: ['Source', 'Data'],
              rows: [
                [
                  'People who write via WhatsApp',
                  'Phone number, WhatsApp profile name, message content (text, audio, images, documents), date and time, delivery and read status',
                ],
                [
                  'Customer records',
                  'First and last name, phone number and other contact details or history the Customer already holds in its own system, when a conversation is linked to a contact',
                ],
                [
                  'Customer’s team',
                  'Name, email, role, actions in the inbox (take over, reply, hand back)',
                ],
                [
                  'Meta connection',
                  'WhatsApp Business account and number identifiers, display name, number quality rating and an access token, which we store encrypted',
                ],
              ],
            },
          },
          {
            p: 'We do not ask for or infer sensitive data (for example, health data) ourselves. If a person writes it in a message, it stays in the conversation like any other content and the Customer is responsible for how it is handled.',
          },
        ],
      },
      {
        id: 'finalidades',
        title: '3. What we use it for',
        blocks: [
          {
            ul: [
              'Receiving and sending WhatsApp messages on the Customer’s behalf.',
              'Generating automatic replies with artificial intelligence based on the content the Customer itself configured (services, prices, hours or other information).',
              'Handing the conversation to the team when the assistant should not or cannot answer, and notifying staff.',
              'Showing the contact’s history and context in the inbox.',
              'Keeping the service secure, preventing abuse and meeting legal obligations.',
            ],
          },
        ],
      },
      {
        id: 'ia',
        title: '4. Artificial intelligence',
        blocks: [
          {
            ul: [
              'A language model processes the text of incoming messages and the content configured by the Customer to draft a reply or decide to hand over to the team.',
              'The assistant does not replace professional judgment or give medical, legal, financial or other specialized advice; when asked for it, it hands the conversation to the team.',
              'AI providers process the text to return the answer to us. We access them through programming interfaces (APIs) and do not allow people’s messages to be used to train their models.',
              'The Customer can turn the assistant off at any time from Settings.',
            ],
          },
        ],
      },
      {
        id: 'comparticion',
        title: '5. Who we share data with',
        blocks: [
          {
            ul: [
              '**Meta Platforms (WhatsApp Business Platform):** carries the messages and is responsible for its own processing under [WhatsApp’s policies](https://www.whatsapp.com/legal/business-policy).',
              '**Infrastructure and AI providers** that serve us under confidentiality agreements: hosting, database and language model.',
              '**Authorities**, when required by a valid law or order.',
            ],
          },
          { p: 'We do not sell personal data or use it for advertising.' },
        ],
      },
      {
        id: 'conservacion',
        title: '6. Where and how long we keep it',
        blocks: [
          {
            ul: [
              'Data is stored on the servers of our infrastructure providers, located in Atlanta, United States.',
              'Conversations are kept for as long as the Customer keeps its account. When WhatsApp is disconnected, the history is kept and the service stops processing new messages.',
              'Attachments (images, audio, documents) are available in the inbox for 7 days, which is how long Meta keeps the file.',
              'When the account is closed or at the Customer’s request, we delete the data within 30 days at most, except what we must keep by law.',
            ],
          },
        ],
      },
      {
        id: 'seguridad',
        title: '7. Security',
        blocks: [
          {
            p: 'We use encrypted connections, access tokens encrypted at rest, per-Customer access (one Customer cannot see another’s data) and signature verification of every notification we receive from Meta. No system is infallible; if we detect an incident affecting your data, we will notify the Customer without delay.',
          },
        ],
      },
      {
        id: 'derechos',
        title: '8. Your rights',
        blocks: [
          {
            p: 'You can request access to, correction or deletion of your data, and object to its processing. Write to us at [soporte@connectaia.com](mailto:soporte@connectaia.com).',
          },
        ],
      },
      {
        id: 'eliminacion-de-datos',
        title: '9. Data deletion',
        blocks: [
          {
            p: 'To request deletion of your data, write to [soporte@connectaia.com](mailto:soporte@connectaia.com) from the email associated with your account, or tell us the WhatsApp phone number you used and the business or organization you talked to. We will reply within 15 business days at most.',
          },
        ],
      },
      {
        id: 'menores',
        title: '10. Minors',
        blocks: [
          {
            p: 'The service is aimed at businesses and organizations. When a minor writes, they usually do so through their parents or guardians, and the Customer decides how to handle those messages.',
          },
        ],
      },
      {
        id: 'cambios',
        title: '11. Changes and contact',
        blocks: [
          {
            p: 'If we change this policy, we will publish the new version with its date. For any question: [soporte@connectaia.com](mailto:soporte@connectaia.com).',
          },
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro:
      'These terms govern the use of Connecta’s WhatsApp assistant and inbox by businesses, organizations and professionals (“the Customer”). By connecting a number or using the service, the Customer accepts them.',
    sections: [
      {
        id: 'servicio',
        title: '1. The service',
        blocks: [
          {
            p: 'Connecta provides: (a) an assistant that answers on WhatsApp based on the content the Customer configures; (b) an inbox where the team sees conversations, takes them over, replies and hands them back to the assistant; and (c) connection of the Customer’s WhatsApp Business number through Meta’s embedded signup.',
          },
        ],
      },
      {
        id: 'cuenta',
        title: '2. Account and WhatsApp connection',
        blocks: [
          {
            ul: [
              'The Customer must own the number it connects and be authorized to use it.',
              'The connection requires a WhatsApp Business account and acceptance of Meta’s terms. Connecta does not control Meta’s decisions (name approval, number quality, limits or suspensions).',
              'The Customer can disconnect the number at any time from Settings. The history is kept and the service stops processing new messages.',
            ],
          },
        ],
      },
      {
        id: 'responsabilidades',
        title: '3. Customer responsibilities',
        blocks: [
          {
            ul: [
              'Configure accurate, up-to-date content (services, prices, hours or other information). The assistant only answers with what the Customer loaded.',
              'Review and handle the conversations the assistant hands to the team, especially those flagged as urgent.',
              'Tell the people who write to it that messages may be handled by an artificial intelligence assistant, and obtain the consents the law requires to process their data.',
              'Comply with the WhatsApp Business policies and the regulations that apply to its activity and sector, including data protection.',
            ],
          },
        ],
      },
      {
        id: 'uso-aceptable',
        title: '4. Acceptable use',
        blocks: [
          {
            p: 'The service may not be used to send spam or unsolicited messages, for illegal or deceptive activities, for content Meta prohibits, or to try to access other Customers’ data or tamper with the service.',
          },
        ],
      },
      {
        id: 'ia',
        title: '5. Artificial intelligence and its limits',
        blocks: [
          {
            ul: [
              'Automatic replies may contain errors. The assistant does not replace professional judgment or give diagnoses, treatments or medical, legal, financial or other specialized advice.',
              'When faced with a question that requires professional judgment, an emergency or a message it does not understand, the assistant hands the conversation to the team. The Customer must have staff to handle it.',
              'The assistant is not designed for emergencies. Anyone with an emergency should call emergency services.',
            ],
          },
        ],
      },
      {
        id: 'datos',
        title: '6. Data and confidentiality',
        blocks: [
          {
            p: 'Processing of personal data is governed by the [Privacy Policy](privacy). The Customer retains ownership of its conversations and content; Connecta only uses them to provide the service.',
          },
        ],
      },
      {
        id: 'precio',
        title: '7. Price and payment',
        blocks: [
          {
            p: 'The price of the service and its payment terms are not fixed: they are defined with each Customer when the service is contracted, as agreed by both parties, and are set out in the corresponding proposal or agreement. Any later change will be agreed with the Customer or notified with reasonable advance notice.',
          },
        ],
      },
      {
        id: 'disponibilidad',
        title: '8. Availability',
        blocks: [
          {
            p: 'We aim to keep the service continuously available, but it may be interrupted by maintenance or by our own or third-party failures (for example, Meta or infrastructure providers). We do not guarantee uninterrupted availability.',
          },
        ],
      },
      {
        id: 'responsabilidad',
        title: '9. Limitation of liability',
        blocks: [
          {
            p: 'To the extent the law allows, Connecta is not liable for indirect damages, loss of customers or revenue, or for decisions made based on automatic replies. Connecta’s total liability to the Customer is limited to the amount paid for the service in the 3 months before the event.',
          },
        ],
      },
      {
        id: 'terminacion',
        title: '10. Suspension and termination',
        blocks: [
          {
            p: 'The Customer may stop using the service at any time. Connecta may suspend it if these terms are breached, if Meta suspends the number or if there is a security risk. On termination, data is handled according to section 6 of the [Privacy Policy](privacy#conservacion).',
          },
        ],
      },
      {
        id: 'cambios',
        title: '11. Changes, governing law and contact',
        blocks: [
          {
            p: 'We may update these terms and will give the Customer reasonable notice. They are governed by the laws of the Republic of Guatemala and any dispute will be submitted to the competent courts of Guatemala City. Contact: [soporte@connectaia.com](mailto:soporte@connectaia.com).',
          },
        ],
      },
    ],
  },
};

export const LEGAL = { es, en } as const;

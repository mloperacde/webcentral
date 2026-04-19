import sys
import re

with open('parsed.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Skip everything before the start of the actual content
start_idx = text.find('1. DEFINICIONES', text.find('1. DEFINICIONES') + 1)
if start_idx != -1:
    text = text[start_idx:]

# 2. Split lines and remove footers/headers
raw_lines = text.split('\n')
valid_lines = []

for line in raw_lines:
    t = line.strip()
    if not t:
        continue
    # Skip page footers
    if t.startswith('Página') and ' de 27' in t:
        continue
    if 'VERSIÓN' in t or 'CÓDIGO PSII' in t:
        continue
    if 'Política del Sistema Interno de Información' in t:
        continue
    
    valid_lines.append(t)

# 3. Stitch lines correctly (to fix line wrapping)
paragraphs = []
current_para = []

for line in valid_lines:
    if re.match(r'^\d+\.\s+[A-ZÁÉÍÓÚÑ]', line) or re.match(r'^\d+\.\d+\.\s+[A-ZÁÉÍÓÚÑ]', line):
        if current_para:
            paragraphs.append(' '.join(current_para))
            current_para = []
        paragraphs.append(line)
        continue
    
    if current_para:
        if current_para[-1].endswith('-'):
            current_para[-1] = current_para[-1][:-1] + line
        else:
            current_para.append(line)
    else:
        current_para.append(line)

if current_para:
    paragraphs.append(' '.join(current_para))

# 4. Generate TSX
jsx_content = []

for p in paragraphs:
    if re.match(r'^\d+\.\s+[A-ZÁÉÍÓÚÑ]', p):
        jsx_content.append(f'<h2 className="text-xl md:text-2xl font-semibold text-white print:text-[#1a1a1a] print:pt-6 mt-12 mb-6 border-b border-white/20 print:border-black/20 pb-2px">{p}</h2>')
    elif re.match(r'^\d+\.\d+\.\s+[A-ZÁÉÍÓÚÑ]', p):
        jsx_content.append(f'<h3 className="text-lg font-medium text-accent print:text-[#333] mt-8 mb-4">{p}</h3>')
    elif p.startswith('•') or p.startswith('o '):
        jsx_content.append(f'<li className="text-white/80 print:text-black/80 font-light leading-relaxed mb-2 ml-6 list-disc">{p[1:].strip()}</li>')
    else:
        jsx_content.append(f'<p className="text-white/70 print:text-black/90 font-light leading-relaxed mb-6 text-justify">{p}</p>')

jsx_body = '\n'.join(jsx_content).replace('{', '&#123;').replace('}', '&#125;')

tsx = f'''import React, {{ useEffect }} from 'react';
import {{ motion }} from 'motion/react';
import {{ Link }} from 'react-router-dom';
import {{ ArrowLeft, Printer, Download }} from 'lucide-react';

export const PoliticaSistemaInformacionPage = () => {{
  useEffect(() => {{
    window.scrollTo(0, 0);
  }}, []);

  const handlePrint = () => {{
    window.print();
  }};

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 print:pt-4 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {{/* Botonera Oculta al imprimir */}}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6 print:hidden">
          <Link to="/canal-etico" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">
            <ArrowLeft className="w-4 h-4" />
            Volver al Canal Ético
          </Link>
          <div className="flex items-center gap-4">
            <a 
              href="/politica-sistema-informacion.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10"
            >
              <Printer className="w-4 h-4" />
              Imprimir
            </a>
            <a href="/politica-sistema-informacion.pdf" download="politica-sistema-informacion.pdf" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-accent hover:bg-white transition-colors px-4 py-2 rounded-lg">
              <Download className="w-4 h-4" />
              Descargar PDF
            </a>
          </div>
        </div>
        
        <motion.div
           initial={{{{ opacity: 0, y: 20 }}}}
          animate={{{{ opacity: 1, y: 0 }}}}
          transition={{{{ duration: 0.6 }}}}
          className="print:block"
        >
          {{/* Header del Documento */}}
          <div className="mb-12 border-b border-white/10 print:border-black/50 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl lg:text-5xl font-light text-white print:text-black mb-6 uppercase tracking-tight italic">
                Política del <span className="text-accent print:text-[#666] underline decoration-accent/30 print:decoration-transparent underline-offset-8">Sistema de Información</span>
              </h1>
              <p className="text-white/40 print:text-black/60 tracking-widest uppercase font-bold text-sm">
                Central de Envasados S.A.
              </p>
            </div>
            {{/* Logo visible únicamente al imprimir */}}
            <div className="hidden print:block w-48 mb-4 order-1 md:order-2">
               <img src="/logo.webp" alt="Central de Envasados" className="w-full h-auto grayscale" />
            </div>
          </div>

          {{/* Control de Documentos - Estilo Premium para Impresión */}}
          <div className="mb-12 overflow-hidden rounded-lg border border-white/10 print:border-black/20 text-[10px] uppercase tracking-wider font-bold">
            <div className="grid grid-cols-2 border-b border-white/10 print:border-black/20 bg-white/5 print:bg-gray-50">
              <div className="p-4 border-r border-white/10 print:border-black/20">
                <span className="text-white/30 print:text-black/40 block mb-1 text-[8px]">CÓDIGO</span>
                <span className="text-accent print:text-black">PSII</span>
              </div>
              <div className="p-4">
                <span className="text-white/30 print:text-black/40 block mb-1 text-[8px]">VERSIÓN</span>
                <span className="text-white print:text-black">V. 03</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white/[0.02] print:bg-white text-[9px]">
              <div className="p-4 border-b md:border-b-0 md:border-r border-white/10 print:border-black/20">
                <span className="text-white/30 print:text-black/40 block mb-1 text-[8px]">ELABORADO POR</span>
                <div className="text-white/80 print:text-black/80">
                  <div>Grupo Adaptalia</div>
                  <div className="text-[8px] font-normal lowercase italic text-white/40 print:text-black/40">Consultor y asesor externo</div>
                </div>
              </div>
              <div className="p-4 border-b md:border-b-0 md:border-r border-white/10 print:border-black/20">
                <span className="text-white/30 print:text-black/40 block mb-1 text-[8px]">REVISADO POR (06/2024)</span>
                <div className="text-white/80 print:text-black/80 font-medium">Responsable Dirección</div>
              </div>
              <div className="p-4">
                <span className="text-white/30 print:text-black/40 block mb-1 text-[8px]">APROBADO POR (06/2024)</span>
                <div className="text-white/80 print:text-black/80 font-medium">Órgano Administración</div>
              </div>
            </div>
          </div>
          
          {{/* Cuerpo del Documento */}}
          <div className="prose prose-invert max-w-none print:prose-p:text-black/90 print:border-none">
            {jsx_body}
          </div>
        </motion.div>
      </div>
    </div>
  );
}};
'''

with open('src/pages/PoliticaSistemaInformacionPage.tsx', 'w', encoding='utf-8') as f:
    f.write(tsx)

print('Done')

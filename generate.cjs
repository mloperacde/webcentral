const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/politicaSistema.json', 'utf-8'));
let jsxBody = '';

data.sections.forEach(sec => {
  if (sec.title.match(/^\d+\.\s+[A-Z]/) && sec.title.length > 5) {
    jsxBody += `\n<h2 className="text-xl md:text-2xl font-medium text-white print:text-black mt-12 mb-6">${sec.title}</h2>\n`;
  } else if (sec.title.match(/^\d+\.\d+\./)) {
    jsxBody += `\n<h3 className="text-lg font-medium text-accent print:text-black mt-8 mb-4">${sec.title}</h3>\n`;
  } else {
    jsxBody += `\n<h4 className="text-base font-bold text-white print:text-black mt-6 mb-2">${sec.title}</h4>\n`;
  }
  
  if (sec.content) {
    jsxBody += `<p className="text-white/70 print:text-black/80 font-light leading-relaxed mb-6">${sec.content}</p>\n`;
  }
});

const tsxTemplate = `import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Download } from 'lucide-react';

export const PoliticaSistemaInformacionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 print:pt-10 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6 print:hidden">
          <Link to="/canal-etico" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">
            <ArrowLeft className="w-4 h-4" />
            Volver al Canal Ético
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={handlePrint} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Printer className="w-4 h-4" />
              Imprimir
            </button>
            <button onClick={handlePrint} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-accent hover:bg-white transition-colors px-4 py-2 rounded-lg">
              <Download className="w-4 h-4" />
              Descargar PDF
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="print:block"
        >
          <div className="mb-16 border-b border-white/10 print:border-black/10 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-3xl lg:text-5xl font-light text-white print:text-black mb-6 uppercase tracking-tight italic">
                Política del <span className="text-accent underline decoration-accent/30 underline-offset-8">Sistema de Información</span>
              </h1>
              <p className="text-white/40 print:text-black/60 tracking-widest uppercase font-bold text-sm">
                Central de Envasados S.A.
              </p>
            </div>
            {/* Logo para impresión */}
            <div className="hidden print:block w-48 mb-4">
               <img src="/logo_final.png" alt="Central de Envasados" className="w-full h-auto grayscale" />
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none print:prose-p:text-black/80 print:prose-h2:text-black print:prose-h3:text-black text-justify">
            ${jsxBody}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
`;

fs.writeFileSync('src/pages/PoliticaSistemaInformacionPage.tsx', tsxTemplate, 'utf-8');
console.log('Generated PoliticaSistemaInformacionPage.tsx');

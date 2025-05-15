
const Diagnostic = () => {
  return (
    <section id="diagnostico" className="bg-zambrano-beige py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center">Diagnóstico</h2>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-zambrano-gray mb-6 leading-relaxed text-center">
              El diagnóstico de lipedema es clínico y requiere una valoración médica
              especializada. Analizamos tus síntomas, antecedentes y realizamos una
              exploración física detallada para diferenciarlo de otras condiciones.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-zambrano-dark-blue text-xl mb-2">Evaluación clínica</div>
                <p className="text-sm text-zambrano-gray">Análisis detallado de síntomas y signos físicos</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-zambrano-dark-blue text-xl mb-2">Historia médica</div>
                <p className="text-sm text-zambrano-gray">Revisión de antecedentes personales y familiares</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-zambrano-dark-blue text-xl mb-2">Plan personalizado</div>
                <p className="text-sm text-zambrano-gray">Enfoque terapéutico adaptado a tu caso particular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;

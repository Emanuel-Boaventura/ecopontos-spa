import MapEcopontosWrapper from "./MapEcopontosWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col">
      <section className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-green-600 shadow-lg">
        <div className="w-full h-full">
          <MapEcopontosWrapper />
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 bg-white text-green-900">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-green-700">
            O que é um Ecoponto?
          </h1>
          <p className="text-lg mb-4">
            Ecopontos são locais públicos destinados ao descarte correto de
            resíduos recicláveis e outros materiais, promovendo a
            sustentabilidade e a preservação do meio ambiente. Aqui você pode
            descartar papel, plástico, vidro, metal, eletrônicos e outros
            resíduos de forma segura e responsável.
          </p>
        </div>
      </section>

      {/* Section: How to Recycle Trash */}
      <section className="w-full bg-green-50 py-16 px-4 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Como Reciclar Seu Lixo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500 max-w-lg md:max-w-2xl w-full">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Papel
              </h3>
              <ul className="text-green-900 list-disc list-inside text-left">
                <li>Separe papéis limpos e secos.</li>
                <li>Evite papel engordurado ou plastificado.</li>
                <li>Desmonte caixas para economizar espaço.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500 max-w-lg md:max-w-2xl w-full">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Plástico
              </h3>
              <ul className="text-green-900 list-disc list-inside text-left">
                <li>Lave embalagens antes de descartar.</li>
                <li>Retire tampas e rótulos quando possível.</li>
                <li>Evite misturar plásticos diferentes.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500 max-w-lg md:max-w-2xl w-full">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Vidro
              </h3>
              <ul className="text-green-900 list-disc list-inside text-left">
                <li>Lave garrafas e potes.</li>
                <li>Evite descartar vidro quebrado solto (embale em papel).</li>
                <li>Retire tampas metálicas ou plásticas.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500 max-w-lg md:max-w-2xl w-full">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Metal
              </h3>
              <ul className="text-green-900 list-disc list-inside text-left">
                <li>Latas devem estar limpas e amassadas.</li>
                <li>Evite misturar metais com outros resíduos.</li>
                <li>Separe alumínio de aço sempre que possível.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Electronic Waste */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center border-t border-green-100">
        <div className="max-w-4xl w-full text-center flex items-center flex-col">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Lixo Eletrônico (E-lixo)
          </h2>
          <p className="text-green-900 text-lg mb-4">
            O lixo eletrônico inclui aparelhos como celulares, computadores,
            pilhas, baterias, eletrodomésticos e outros dispositivos
            eletrônicos. Esses materiais contêm substâncias tóxicas e não devem
            ser descartados no lixo comum.
          </p>
          <ul className="text-green-900 list-disc list-inside text-left mb-4 max-w-2xl">
            <li>
              Leve seus eletrônicos antigos ou quebrados a um Ecoponto que
              aceite e-lixo.
            </li>
            <li>Nunca descarte pilhas e baterias no lixo comum.</li>
            <li>Verifique se o Ecoponto mais próximo aceita eletrônicos.</li>
            <li>Ajude a evitar a contaminação do solo e da água!</li>
          </ul>
          <div className="mt-6">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold shadow">
              Descarte consciente faz a diferença!
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

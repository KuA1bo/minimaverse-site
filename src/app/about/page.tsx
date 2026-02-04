import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold">Что такое Minima</h1>
          <p className="text-gray-400 mt-2">Архитектура протокола</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Основная концепция</h2>
          <p className="text-gray-300 mb-4">
            Minima — это первый в мире полностью децентрализованный блокчейн-протокол, в котором каждый узел является полным узлом. В отличие от традиционных блокчейнов, где требуется значительная вычислительная мощность, Minima позволяет каждому устройству (включая мобильные телефоны и IoT-устройства) участвовать в сети на равных правах.
          </p>
          <p className="text-sm text-gray-500">
            Источник: <Link href="https://minima.global/whitepaper" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Minima Whitepaper</Link>
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Архитектурные особенности</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">1. Компактная структура данных</h3>
              <p className="text-gray-300 mb-2">
                Minima использует уникальную структуру данных, которая позволяет хранить полную историю блокчейна в нескольких мегабайтах. Это достигается за счёт использования направленных ациклических графов (DAG) и оптимизированных алгоритмов сжатия.
              </p>
              <p className="text-sm text-gray-500">
                Статус: <span className="text-green-500">confirmed</span> | Источник: <Link href="https://docs.minima.global" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Official Documentation</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">2. Гибридный консенсус</h3>
              <p className="text-gray-300 mb-2">
                Протокол использует гибридный механизм консенсуса, сочетающий элементы доказательства работы (PoW) и доказательства участия (PoS). Это обеспечивает безопасность сети при минимальном энергопотреблении.
              </p>
              <p className="text-sm text-gray-500">
                Статус: <span className="text-green-500">confirmed</span> | Источник: <Link href="https://minima.global/whitepaper" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Minima Whitepaper</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">3. Горизонтальное масштабирование</h3>
              <p className="text-gray-300 mb-2">
                Архитектура Minima позволяет сети масштабироваться горизонтально без ущерба для децентрализации. Каждый новый узел увеличивает общую пропускную способность сети.
              </p>
              <p className="text-sm text-gray-500">
                Статус: <span className="text-green-500">confirmed</span> | Источник: <Link href="https://docs.minima.global/docs/architecture" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Architecture Documentation</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Ключевые отличия от классических блокчейнов</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="font-medium text-gray-300 mb-2">Традиционные блокчейны</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Требуют значительных ресурсов для полных узлов</li>
                <li>• Централизация майнинга</li>
                <li>• Ограниченная масштабируемость</li>
                <li>• Высокое энергопотребление</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <h3 className="font-medium text-gray-300 mb-2">Minima</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Полные узлы на любых устройствах</li>
                <li>• Децентрализованный консенсус</li>
                <li>• Горизонтальное масштабирование</li>
                <li>• Энергоэффективность</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Источник: <Link href="https://minima.global/technology" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Technology Overview</Link>
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Технические характеристики</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-gray-300">Размер полной ноды</h3>
              <p className="text-gray-400">~5-10 MB (по состоянию на 2024)</p>
              <p className="text-sm text-gray-500">Статус: <span className="text-green-500">confirmed</span></p>
            </div>

            <div>
              <h3 className="font-medium text-gray-300">Время подтверждения транзакции</h3>
              <p className="text-gray-400">~30-60 секунд</p>
              <p className="text-sm text-gray-500">Статус: <span className="text-green-500">confirmed</span></p>
            </div>

            <div>
              <h3 className="font-medium text-gray-300">Языки смарт-контрактов</h3>
              <p className="text-gray-400">Minima Script (встроенный), TypeScript SDK</p>
              <p className="text-sm text-gray-500">Статус: <span className="text-green-500">confirmed</span></p>
            </div>
          </div>
        </section>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-500">
          <p>
            This site does not represent the official Minima team. All information is compiled from publicly available sources.
          </p>
        </div>
      </main>

      <footer className="border-t border-gray-700 py-6 mt-8">
        <div className="container mx-auto px-4 max-w-4xl text-center text-gray-500 text-sm">
          <p>Minimaverse — Community-driven information hub</p>
          <p className="mt-1">Data verified from official sources</p>
        </div>
      </footer>
    </div>
  );
}

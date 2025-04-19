import './style.css'

// Insertamos el contenido HTML para el portafolio en el div con id "app"
document.querySelector('#app').innerHTML = `
  <header class="bg-gray-800 text-white py-4">
    <nav class="max-w-7xl mx-auto flex justify-between items-center px-6">
      <h1 class="text-2xl font-semibold">Sebastián Holguín</h1>
      <ul class="flex space-x-6">
        <li><a href="#about" class="hover:text-gray-300">Sobre mí</a></li>
        <li><a href="#projects" class="hover:text-gray-300">Proyectos</a></li>
        <li><a href="#contact" class="hover:text-gray-300">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <!-- Sección sobre mí -->
  <section id="about" class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold mb-6">Sobre mí</h2>
      <p class="text-lg text-gray-700">
        Hola, soy Sebastián Holguín, un desarrollador de software con experiencia en HTML, CSS, JavaScript y frameworks modernos. Me apasiona construir soluciones innovadoras y eficientes.
      </p>
    </div>
  </section>

  <!-- Sección de proyectos -->
  <section id="projects" class="py-12">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold mb-6">Mis Proyectos</h2>
      <p class="text-lg text-gray-700">
        Aquí puedes ver algunos de mis proyectos más recientes:
      </p>
      <!-- Lista de proyectos, puedes agregar más según sea necesario -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Proyecto 1</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto.</p>
          <a href="#" class="text-blue-500">Ver más</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Proyecto 2</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto.</p>
          <a href="#" class="text-blue-500">Ver más</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Proyecto 3</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto.</p>
          <a href="#" class="text-blue-500">Ver más</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de contacto -->
  <section id="contact" class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold mb-6">Contacto</h2>
      <p class="text-lg text-gray-700">
        Si tienes alguna pregunta o quieres discutir una colaboración, no dudes en ponerte en contacto conmigo.
      </p>
      <div class="mt-8">
        <a href="mailto:sebasholguin356@gmail.com" class="text-blue-500">Enviar correo</a>
      </div>
    </div>
  </section>
`


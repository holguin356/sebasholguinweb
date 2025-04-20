import "./style.css";
import logo from "/src/logo.png";
import img1 from "/src/img1.png";

// Insertamos el contenido HTML para el portafolio en el div con id "app"
document.querySelector("#app").innerHTML = `
  <header class="w-full bg-[#1e1e2f] text-white py-4 px-4 shadow-md">
    <nav class="w-full mx-auto flex justify-between items-center">
      <img src="${logo}" alt="logo portafolio" class="mr-4 logo__nav">
      <h1 class="hidden sm:block md:text-3xl text-2xl font-semibold mr-4">Sebastián Holguín Dev</h1>

      <ul class="flex gap-6 text-sm sm:text-base">
        <li><a href="#about" class="hover:text-red-400">Sobre mí</a></li>
        <li><a href="#projects" class="hover:text-yellow-400">Proyectos</a></li>
        <li><a href="#contact" class="hover:text-yellow-400">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <!-- Sección introducción -->
  <section id="introduction" class="bg-gray-100">
    <div class="w-full mx-auto text-left bg-amber-700 ">
      <p class="text-[#1e1e2f] text-5xl pt-5 pb-2 px-2 font-semibold">Hola! Soy,</p>
<div class="flex justify-between w-full mx-auto text-left bg-[#1e1e2f]">
  <div class="text-left w-1/2">
    <p class="text-white text-5xl px-3 font-semibold">Sebastián Holguín Parra Desarrollador de Software</p>
    <br>
    <p class="text-white text-5xl px-3 font-semibold">
      "El <span class="text-amber-700">código</span> es mi pastor y con el nada me faltará"
    </p>
  </div>
  <div class="w-xl justify-items-end">
    <img src="${img1}" alt="Programando" class="w-full rounded-xl shadow-lg" />
  </div>
  </div>
  </section>

  <!-- Sección sobre mí -->
  <section id="about" class="bg-gray-100 py-12">
    <div class="w-full mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold mb-6">Sobre mí</h2>
      <p class="text-lg text-gray-700">
        Hola, soy Sebastián Holguín, un desarrollador de software con experiencia en HTML, CSS, JavaScript y frameworks modernos. Me apasiona construir soluciones innovadoras y eficientes.
      </p>
    </div>
  </section>

  <!-- Sección de proyectos -->
  <section id="projects" class="py-12">
    <div class="w-full mx-auto px-6 text-center">
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
    <div class="w-full mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold mb-6">Contacto</h2>
      <p class="text-lg text-gray-700">
        Si tienes alguna pregunta o quieres discutir una colaboración, no dudes en ponerte en contacto conmigo.
      </p>
      <div class="mt-8">
        <a href="mailto:sebasholguin356@gmail.com" class="text-blue-500">Enviar correo</a>
      </div>
    </div>
  </section>
`;

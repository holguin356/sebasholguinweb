(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const r="/sebasholguinweb/assets/logo-KBT5Yce1.png",i="/sebasholguinweb/assets/img1-omJzgsda.png",n="/sebasholguinweb/assets/proyecto1-A3eix1Zw.PNG",c="/sebasholguinweb/assets/proyecto2-FOQc0VLw.png",d="/sebasholguinweb/assets/proyecto2-1-DOaRHcwH.png";document.querySelector("#app").innerHTML=`
<header class="w-full bg-[#1e1e2f] text-white py-4 px-4 shadow-md">
  <nav class="w-full mx-auto flex justify-between items-center">
    <img src="${r}" alt="logo portafolio" class="mr-4 logo__nav">
    <h1 class="hidden sm:block md:text-3xl text-2xl font-semibold mr-4">Sebastián Holguín Dev</h1>

    <ul class="flex gap-6 text-sm sm:text-base">
      <li><a href="#about" class="hover:text-amber-700">Sobre mí</a></li>
      <li><a href="#projects" class="hover:text-amber-700">Proyectos</a></li>
      <li><a href="#contact" class="hover:text-amber-700">Contacto</a></li>
    </ul>
  </nav>
</header>

<!-- Sección introducción -->
<section id="introduction" class="bg-gray-100">
  <div class="w-full mx-auto text-left bg-amber-700 ">
    <p class="text-[#1e1e2f] md:text-5xl text-4xl pt-5 pb-2 px-2 font-semibold">Hola! Soy,</p>
    <div class="flex justify-between w-full mx-auto text-left bg-[#1e1e2f]">
      <div class="flex flex-col md:flex-row justify-between w-full mx-auto text-left bg-[#1e1e2f] px-4 py-2">
        <!-- Texto -->
        <div class="text-left md:w-1/2 w-full mb-6 md:mb-0">
          <p class="text-white md:text-5xl text-4xl px-3 font-semibold">
            Sebastián Holguín Parra Desarrollador de Software
          </p>
          <br>
          <p class="text-white md:text-5xl text-4xl px-3 font-semibold">
            "El <span class="text-amber-700">código</span> es mi pastor y con él nada me faltará"
          </p>
        </div>

        <!-- Imagen -->
        <div class="md:w-1/2 w-full flex  md:justify-end justify-center">
          <img src="${i}" alt="Programando" class="w-full max-w-sm rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Transición -->
<div class="h-6 bg-gradient-to-b from-[#1e1e2f] to-gray-800"></div>

<!-- Sección sobre mí -->
<section id="about" class="bg-gray-800 py-12">
  <div class="flex justify-between w-full mx-auto text-left bg-gray-800 ">
    <div class="flex flex-col md:flex-row justify-between w-full mx-auto text-left bg-gray-800 px-4 py-2">
      <div class="mx-auto pb-4 px-6 text-center md:w-1/2 w-full text-white">
        <h2 class="md:text-5xl text-3xl font-semibold mb-6">Sobre mí</h2>
        <p class="md:text-3xl text-xl">
          Soy <span class="text-amber-700">Sebastián Holguín</span>, sueño con ser un gran desarrollador.
          Estoy en busca de una empresa que me guíe y me ayude a crecer como programador,
          seguir buenas prácticas como el código limpio y mejorar cada día en lo que me apasiona.
        </p>
        <div class="w-full my-12 flex items-center justify-center gap-15">
          <a target="_blank" class="transition-all text-[#BB4D00] hover:scale-200 duration-300" title="Github"
            href="https://github.com/holguin356">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="50" width="50"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg>
          </a>
          <a target="_blank" class="transition-all text-[#BB4D00] hover:scale-200 duration-300" title="Linkedin"
            href="https://www.linkedin.com/in/holguin356/">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="50" width="50"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
              </path>
            </svg>
          </a>
          <a href="https://drive.google.com/file/d/1_l1msroVry7IOmttEqXYAyhKSASSDKpH/view?usp=sharing" target="_blank"
            class="transition-all text-[#BB4D00] hover:scale-200 duration-300" title="Ver CV">

            <svg viewBox="0 0 24 24" height="50" width="50" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
              fill="#1F2937">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
              </g>
            </svg>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="order-1 lg:order-2 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
        <!-- Barra superior tipo terminal -->
        <div class="flex flex-row">
          <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div class="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <!-- Botones estilo terminal -->
        <div class="px-4 lg:px-8 py-5">
          <div class="flex space-x-2">
            <div class="h-3 w-3 rounded-full bg-red-400"></div>
            <div class="h-3 w-3 rounded-full bg-orange-400"></div>
            <div class="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>
        <!-- Código -->
        <div class="overflow-hidden border-t-2 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code class="text-left font-mono text-xs md:text-3lg lg:text-lg">
      <div><span class="text-pink-500 mr-2">const</span><span class="text-white mr-2">coder</span><span class="text-pink-500 mr-2">=</span><span class="text-gray-400">{</span></div>
      <div class="ml-4"><span class="text-white">name:</span> <span class="text-gray-400">'</span><span class="text-amber-300">Sebastián Holguín</span><span class="text-gray-400">',</span></div>
      <div class="ml-4"><span class="text-white">skills:</span> <span class="text-gray-400">['</span><span class="text-amber-300">HTML</span><span class="text-gray-400">', '</span><span class="text-amber-300">CSS</span><span class="text-gray-400">', '</span><span class="text-amber-300">JavaScript</span><span class="text-gray-400">', '</span><span class="text-amber-300">C#</span><span class="text-gray-400">', '</span><span class="text-amber-300">Java</span><span class="text-gray-400">', '</span><span class="text-amber-300">SQL</span><span class="text-gray-400">'],</span></div>
      <div class="ml-4"><span class="text-white">hardWorker:</span> <span class="text-orange-400">true</span><span class="text-gray-400">,</span></div>
      <div class="ml-4"><span class="text-white">quickLearner:</span> <span class="text-orange-400">true</span><span class="text-gray-400">,</span></div>
      <div class="ml-4"><span class="text-white">problemSolver:</span> <span class="text-orange-400">true</span><span class="text-gray-400">,</span></div>
      <div class="ml-4"><span class="text-green-400">hireable:</span> <span class="text-orange-400">function</span><span class="text-gray-400">() {</span></div>
      <div class="ml-8"><span class="text-orange-400">return</span> <span class="text-gray-400">(</span></div>
      <div class="ml-12"><span class="text-cyan-400">this.</span><span class="text-white">hardWorker</span> <span class="text-amber-300">&amp;&amp;</span></div>
      <div class="ml-12"><span class="text-cyan-400">this.</span><span class="text-white">problemSolver</span> <span class="text-amber-300">&amp;&amp;</span></div>
      <div class="ml-12"><span class="text-cyan-400">this.</span><span class="text-white">skills.length</span> <span class="text-amber-300">&gt;=</span> <span class="text-orange-400">5</span></div>
      <div class="ml-8"><span class="text-gray-400">);</span></div>
      <div class="ml-4"><span class="text-gray-400">}</span><span class="text-gray-400">,</span></div>
      <div><span class="text-gray-400">};</span></div>
    </code>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Transición -->
<div class="h-6 bg-gradient-to-b from-gray-800 to-[#1e1e2f]"></div>

<!-- Sección de proyectos -->
<section id="projects" class="py-12 bg-[#1e1e2f] ">
  <div class="w-full mx-auto px-6 text-center text-white">
    <h2 class="text-3xl font-semibold mb-6">Mis Proyectos</h2>
    <p class="text-lg text-white">
      Aquí puedes ver algunos de mis proyectos más recientes:
    </p>
    <!-- Lista de proyectos, puedes agregar más según sea necesario -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <img src="${n}" alt="Proyecto 1" class="mr-4 pb-4">
        <h3 class="text-xl font-semibold mb-4 text-gray-700">Sebas holguin web</h3>
        <p class="text-gray-700 mb-4">Creé mi portafolio utilizando HTML, JavaScript y Tailwind CSS, con Vite para
          optimizar el rendimiento. El diseño es responsive, adaptándose a todos los dispositivos. Implementé buenas
          prácticas de SEO como etiquetas meta mejorando la visibilidad en los motores de búsqueda.</p>
        <a href="https://github.com/holguin356/sebasholguinweb" target="_blank" class="text-blue-500">Ver más</a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="bg-white p-6 rounded-lg shadow-md relative group ">
          <!-- Imagen principal -->
          <img src="${c}" alt="Proyecto 2"
            class=" inset-0 object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" />

          <!-- Imagen en hover -->
          <img src="${d}" alt="Proyecto 2"
            class="absolute inset-0 object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-700">Proyecto MiRefugio</h3>
            <p class="text-gray-700 mb-4">Aplicación web interna para gestión de hospedajes, desarrollada con C#,
              Blazor,
              Entity Framework Core y arquitectura en N capas. Administra usuarios, pisos, habitaciones y servicios con
              control de acceso por roles, login seguro y panel de estadísticas. Usa patrones como CQRS y DTOs para
              mantener
              el código limpio y escalable.</p>
            <a href="#" class="text-blue-500">Ver más</a>
          </div>
        </div>
      </div>
      <!--
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4 text-gray-700">Proyecto 3</h3>
        <p class="text-gray-700 mb-4">Descripción breve del proyecto.</p>
        <a href="#" class="text-blue-500">Ver más</a>
      </div>
      -->
    </div>
  </div>
</section>

<!-- Transición -->
<div class="h-6 bg-gradient-to-b from-[#1e1e2f] to-[#F3F4F6]"></div>


<!-- Sección de contacto -->
<section id="contact" class="bg-gray-100 py-12">
  <div class="w-full mx-auto px-6 text-center">
    <h2 class="text-3xl font-semibold mb-6">Contacto</h2>
    <p class="text-lg text-gray-700">
      Si tienes alguna pregunta o quieres discutir una colaboración, no dudes en ponerte en contacto conmigo.
    </p>
    <div class="mt-8">
      <a href="https://wa.me/573235186098?text=Hola%20Sebasti%C3%A1n%2C%20vi%20tu%20portafolio%20web%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tu%20trabajo%20como%20desarrollador."
        target="_blank"
        class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 32 32">
          <path
            d="M16 0c-8.837 0-16 7.163-16 16 0 2.837.74 5.557 2.137 7.977l-2.137 8.023 8.229-2.145c2.377 1.295 5.064 1.978 7.771 1.978 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.347 0-4.637-.627-6.659-1.815l-.476-.278-4.884 1.273 1.295-4.792-.311-.492c-1.23-1.946-1.883-4.185-1.883-6.495 0-6.703 5.457-12.161 12.161-12.161s12.161 5.457 12.161 12.161c0 6.703-5.457 12.161-12.161 12.161zM23.529 19.751c-.351-.176-2.078-1.023-2.4-1.139s-.559-.176-.791.176-.911 1.139-1.118 1.377c-.207.234-.396.263-.747.088-.351-.176-1.479-.547-2.819-1.744-1.042-.929-1.744-2.077-1.949-2.428-.207-.351-.021-.54.156-.714.162-.162.351-.421.527-.632.176-.207.234-.351.351-.586.117-.234.059-.439-.029-.615s-.791-1.895-1.085-2.59c-.284-.684-.574-.59-.791-.602l-.676-.012c-.234 0-.615.088-.935.439s-1.23 1.202-1.23 2.929 1.26 3.395 1.435 3.629c.176.234 2.493 3.805 6.042 5.184.843.364 1.5.58 2.012.741.844.268 1.611.23 2.22.14.676-.102 2.078-.848 2.371-1.665.293-.818.293-1.52.205-1.665-.088-.146-.322-.234-.673-.41z" />
        </svg>
        Enviar mensaje de WhatsApp
      </a>
    </div>

  </div>
</section>
`;

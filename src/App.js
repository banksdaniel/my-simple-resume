import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="header">
        <div class="full-name">
          <span class="first-name">Daniel</span>
          <span class="last-name">Oliveira</span>
        </div>
        <div class="contact-info">
          <span class="email">Email: </span>
          <span class="email-val">danielcunhaoliveira7@gmail.com</span>
          <span class="separator"></span>
          <span class="phone">Telefone: </span>
          <span class="phone-val"> +55 (61) 98215-3609</span>
          <br></br>
          <span class="github"><a href ="https://github.com/dangrunger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a></span>
          <span class="linkedin"><a href ="https://www.linkedin.com/in/dangrunger/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></a></span>
        </div>
      </div>
      <div class="about">
      <div class="details">
      <div class="section__title">SOBRE</div>
      </div>
        <span class="position">
        </span>
        <span class="desc">
          Atualmente graduando em Ciência da Computação, no Centro de Ensino
          Unificado de Brasília.
          <br></br>
          Sou motivado, focado em resultados e busco uma empresa de sucesso,
          orientada para equipes e com oportunidade de crescimento.
        </span>
      </div>
      <div class="details">
        <div class="section">
          <br></br>
          <div class="section__title">Experiência</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="left">
                <div class="name">Coopersystem - Soluções em TI</div>
                <div class="desc">
                Brasília, Distrito Federal, Brasil
                </div>
                <div class="duration">Abr 2022 - o momento</div>
              </div>
              <div class="right">
                <div class="name">Estágiario de Desenvolvimento</div>
                <div class="desc">
                  • NodeJS | Javascript ES6  <br></br>• GraphQL | Firebase
                </div>
              </div>
            </div>
            <div class="section__list-item">
              <div class="left">
                <div class="name">Embrapa Recursos Genéticos e Biotecnologia</div>
                <div class="desc">
                Brasília, Distrito Federal, Brasil
                </div>
                <div class="duration">Mar 2021 - Mar 2022</div>
              </div>
              <div class="right">
                <div class="name">Estágiario de Desenvolvimento</div>
                <div class="desc">
                  • Java <br></br>• DML Banco MySQL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="details">
        <div class="section">
          <br></br>
          <div class="section__title">FORMAÇÃO ACADÊMICA</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="left">
                <div class="name">Centro Universitário de Brasília - UniCEUB</div>
                <div class="desc">
                707/907 - SEPN - Asa Norte<br></br>
                Brasília, Distrito Federal, Brasil
                </div>
                <div class="duration">Agosto 2019 - Agosto 2023</div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;

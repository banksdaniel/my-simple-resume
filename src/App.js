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
        </div>
      </div>
      <div class="about">
            <span class="position"><b>Estudante de Ciência da Computação</b></span>
            <br></br>
            <span class="desc">Atualmente graduando em Ciência da Computação, no Centro de Ensino Unificado de Brasília.
            <br></br>
Sou motivado, focado em resultados e busco uma empresa de sucesso, orientada para equipes e com oportunidade de crescimento.</span>
      </div>
      <div class="details">
        <div class="section">
          <br></br>
          <div class="section__title">Experiência</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="left">
                <div class="name"></div>
                <div class="addr">Embrapa Recursos Genéticos e Biotecnologia</div>
                <div class="duration">Mar 2021 - Mar 2022</div>
              </div>
              <div class="right">
                <div class="name">Estágiario de Desenvolvimento</div>
                <div class="desc">• Desenvolvimento WEB - Java <br></br>
                • DML Banco MySQL
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

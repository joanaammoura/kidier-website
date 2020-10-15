import React from 'react';
import './FAQs.css';

function FAQs() {
  return (
    <div className="faqs">
      <h1>Questões?</h1>
      <div className="faqs__container">
        <div className="faqs__question">
          <h3>Do que preciso para a minha subscrição?</h3>
          <p>
            A subscrição Kidier é exclusivamente digital, o que significa que
            apenas podes fazer check-in nas actividades através da nossa app.
            Podes descarregar a nossa app gratuita na App Store ou na Google
            Play Store. Precisas de ter um smartphone com iOS ou Android e
            ligação à internet. Podes instalar a app em mais do que um
            smartphone, se for preciso!
          </p>
        </div>
        <div className="faqs__question">
          <h3>Como funciona a reserva e a visita aos locais?</h3>
          <p>
            Podes encontrar toda a oferta de actividades da Kidier no nosso site
            ou na nossa app. Quando chegares ao local, podes fazer o check-in
            digitalizando o código QR da Kidier, que se encontra próximo da
            entrada do local. Algumas atividades podem exigir que seja feita uma
            reserva com antecedência.
          </p>
        </div>
        <div className="faqs__question">
          <h3>
            Posso pausar ou cancelar a minha subscrição em qualquer altura?
          </h3>
          <p>
            Podes pôr a tua subscrição em pausa em qualquer altura, a começar no
            próximo mês de subscrição. As nossas subscrições M, L e XL requerem
            o mês completo de aviso antes do cancelamento, portanto, a tua
            subscrição será cancelada no final do mês de subscrição seguinte. A
            subscrição S requer 3 meses de aviso.
          </p>
        </div>
      </div>
      <p>Ir para as FAQ's ></p>
    </div>
  );
}

export default FAQs;

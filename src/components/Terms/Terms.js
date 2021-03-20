import React from "react";

import Button from "../../UI/Button/Button";

import "./Terms.css";

const Terms = (props) => {
  return (
    <div>
      <h1 className="termsTitle">Términos y Condiciones</h1>
      <div className="termsParagraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          finibus ante at nulla finibus eleifend. Nunc sodales lorem scelerisque
          nunc tristique, at pellentesque mauris volutpat. Morbi scelerisque
          risus non ligula vulputate, vitae finibus purus luctus. Fusce placerat
          risus et sapien vehicula tincidunt in nec arcu. Vivamus at erat
          condimentum, ullamcorper orci eget, lacinia orci. Phasellus a nibh
          ornare, mollis turpis id, pretium sem. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Duis
          tristique urna et nulla egestas, sed malesuada lorem convallis. Aenean
          felis mauris, tincidunt accumsan lacus nec, egestas vulputate mi.
          Quisque lobortis hendrerit lacus eget consequat. Etiam dui sapien,
          ullamcorper sit amet eros id, feugiat scelerisque ante. Quisque
          egestas elit quam, at volutpat tellus egestas id. Cras rhoncus eu erat
          vel molestie. In id erat nec dui bibendum congue. Vestibulum in
          gravida mi. Aliquam sed sodales nisl. Nullam accumsan risus non sem
          semper, vitae tristique felis mollis. Duis cursus mauris eros, ut
          consequat nunc pulvinar eu. Cras a sapien consequat, laoreet erat eu,
          semper mauris. Mauris elementum ex orci, lobortis rhoncus erat luctus
          vitae. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Donec dictum, mauris posuere blandit
          lobortis, orci tortor euismod velit, ut condimentum magna tellus
          varius dui. Curabitur et laoreet odio. Fusce vulputate mauris sed
          gravida luctus. Proin in dui porta, sagittis purus non, euismod massa.
          Maecenas scelerisque felis eget arcu porta, scelerisque vestibulum
          tellus accumsan. Etiam pretium semper augue, et viverra libero cursus
          at. Integer congue lorem non erat efficitur, in ultrices lectus
          malesuada. Curabitur ligula mi, dapibus ut sapien sed, lacinia
          volutpat risus. Vivamus laoreet elit consectetur lacus finibus, vitae
          euismod lorem tincidunt. Phasellus fermentum feugiat enim ut
          condimentum. Donec tempus odio tortor, eget feugiat erat feugiat
          sodales. Nam vulputate, est sed efficitur lacinia, velit nunc tempus
          est, ut vestibulum nunc quam vel quam. Ut efficitur massa nisi, sit
          amet lacinia elit auctor eu. In hac habitasse platea dictumst. Mauris
          vitae dolor dignissim, iaculis tellus nec, auctor orci. Mauris nec
          imperdiet metus, non placerat justo. Maecenas eu sapien a nulla mattis
          dictum. Nullam consectetur ligula eget tellus hendrerit, quis iaculis
          nisi vestibulum. Etiam fringilla justo et euismod eleifend. Aliquam
          finibus a lectus non posuere. Nam non fringilla ex. Curabitur in sem
          nec nulla egestas efficitur. Nam varius ligula sed tristique placerat.
          Suspendisse at convallis ipsum. In eget quam risus. Cras auctor id
          velit sed sodales. Cras ut commodo urna, a convallis diam. Nulla
          ultrices mi quis nisl egestas varius.
        </p>
      </div>
      <Button onClick={props.onCancel} className="termsButton">
        Cancelar
      </Button>
      <Button onClick={props.onClick} className="termsButton">
        Aceptar Terminos
      </Button>
    </div>
  );
};

export default Terms;

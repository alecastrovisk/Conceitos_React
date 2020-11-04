import React from 'react';


//prop children: acessa o conteúdo do meu componente!!

export default  function Header({ title }) {
    return(
        <header>
            <h1>{ title }</h1>

            
        </header>
    );
}
import React, { Component } from 'react';
import InputTexto from './InputTexto';
import TextArea from './TextArea';
import Select from './Select';
import CheckBox from './CheckBox';
import Button from './Button';

class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <InputTexto data="name-input" type="text" name="Name" />
        </div>
        <div>
          <TextArea data="description-input" name="Descricao" />
        </div>
        <div>
          <InputTexto data="attr1-input" type="number" name="Attr1" />
        </div>
        <div>
          <InputTexto data="attr2-input" type="number" name="Attr2" />
        </div>
        <div>
          <InputTexto data="attr3-input" type="number" name="Attr3" />
        </div>
        <div>
          <InputTexto data="image-input" type="text" name="Imagem" />
        </div>
        <div>
          <Select data="rare-input" type="select" name="Select" />
        </div>
        <div>
          <CheckBox data="trunfo-input" name="Super Trunfo" />
        </div>
        <div>
          <Button data="save-button" name="Salvar" />
        </div>
      </form>
    );
  }
}

export default Form;

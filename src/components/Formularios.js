import React, { useEffect, useState } from 'react';
import { MY_API_KEY } from '../config';


function Formularios() {
  const url = 'https://1crd6sdyg2.execute-api.us-east-1.amazonaws.com/dev/form';
  const [data, setData] = useState('');

  const fetchApi = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-api-key': MY_API_KEY,
          'Content-Type': 'application/json'
        }
      });
      const responseJSON = await response.json();
      setData(responseJSON);
      console.log(responseJSON);
    } catch (error) {
      console.log('Trucha con este pex' + error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='people_form' onSubmit={handleSubmit}>
      <h2>{data.form_name}</h2>
      <GenericForm data={data} />
      <input type='submit' value='Enviar' />
    </form>
  );
}

const renderTypeInput = (qType, id, qOptions) => {
  switch (qType) {
    case 'String':
      return <CampoString id={id} />;
    case 'Numeric':
      return <CampoNumeric id={id} />;
    case 'Boolean':
      return <CampoBoolean id={id} />;
    case 'Checkbox':
      return <CampoCheckbox options={qOptions} />;
    case 'Dropdown':
      return <CampoSelect options={qOptions} />;
    default:
      return 'foo';
  }
};

const GenericForm = ({ data }) => {
  return (
    data ? data.questions.map((question, question_id) => {
      return (
        <section className='sectionForm' key={question_id}>
          <label htmlFor=''>{question.question}</label>
          {renderTypeInput(question.type, question.question_id, question.options)}
        </section>
      );
    }) : []
  );
};

const CampoString = ({ id }) => {
  return <input type='text' id={id} name={id} />;
};

const CampoNumeric = ({ id }) => {
  return <input type='number' id={id} name={id} min='1' max='99' />;
};

const CampoBoolean = ({ id }) => {
  return (
    <>
      <label htmlFor='si'>Si</label>
      <input type='radio' id={id} name={id} value='Si' />
      <label htmlFor='no'>No</label>
      <input type='radio' id={id} name={id} value='No' />
    </>
  );
};

const CampoCheckbox = ({ options }) => {
  return (
    options.map((option, index) => {
      return (
        <section key={index}>
          <input type='checkbox' id={index} name={option} value={option} />
          <label htmlFor='html'>{option}</label>
        </section>
      );

    })

  );
};

const CampoSelect = ({ options }) => {
  return (
    <select name="appoinment">
      {
        options.map((option, index) => {
          return (
            <option key={index} id={index} value={option}>{option}</option>
          );
        })
      }
    </select>
  );
};

export default Formularios;

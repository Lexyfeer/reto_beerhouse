import React, { Fragment, useEffect, useState } from 'react';
import { MY_API_KEY } from '../config';


function Formularios() {
  const url = 'https://1crd6sdyg2.execute-api.us-east-1.amazonaws.com/dev/form';
  const [data, setData] = useState(
    {
      form_id: 0,
      form_name: 'Cargando...',
      questions: []
    }
  );
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [bool, setBool] = useState(true);
  const [check, setCheck] = useState(false);
  const [checkVal, setCheckVal] = useState('');
  const [appointment, setApointment] = useState('10 am');

  useEffect(() => {
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
        console.log(responseJSON);
        setData(responseJSON);
      } catch (error) {
        console.log('Error' + error);
      }
    };

    fetchApi();
  }, []);

  const armaRespuesta = () => {
    let genericJson = {};

    if (data.form_id === 1) {
      genericJson = {
        'form_id': data.form_id,
        'responses': {
          '1': nombre,
          '2': edad,
          '3': bool,
          '4': checkVal,
          '5': appointment
        }
      };
    } else {
      genericJson = {
        'form_id': data.form_id,
        'responses': {
          '1': checkVal,
          '2': edad,
          '3': bool
        }
      };
    }
    return genericJson;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let aspi = armaRespuesta();

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-api-key': MY_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(aspi)
      });
      const data = await response.json();
      console.log(data);
      if (data.message) {
        alert(data.message);
      }
    } catch (error) {
      console.log('Error' + error);
    }
    clearForm();
  };

  const clearForm = () => {
    setNombre('');
    setEdad('');
    setBool(true);
    setCheck(false);
    setCheckVal('');
    setApointment('10 am');
  };

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

  const CampoString = ({ id }) => {
    return (
      <input
        type='text'
        id={id}
        name='nombre'
        value={nombre || ''}
        onChange={(e) => { setNombre(e.target.value); }}
        required
      />
    );
  };

  const CampoNumeric = ({ id }) => {
    return (
      <input
        type='number'
        id={id}
        name='edad'
        min='1'
        max='99'
        value={edad || ''}
        onChange={(e) => { setEdad(e.target.value); }}
        required
      />
    );
  };

  const CampoBoolean = ({ id }) => {
    return (
      <>
        <label htmlFor='si'>Si</label>
        <input
          type='radio'
          id={id}
          name='grpBool'
          value={true}
          onClick={(e) => setBool(e.target.checked)}
        />
        <label htmlFor='no'>No</label>
        <input
          type='radio'
          id={id}
          name='grpBool'
          value={false}
          onClick={(e) => setBool(!e.target.checked)}
        />
      </>
    );
  };

  const CampoCheckbox = ({ options }) => {
    return (
      options.map((option, index) => {
        return (
          <label htmlFor='html' key={index}>
            <input
              type='checkbox'
              value={option}
              checked={check}
              onChange={(e) => {
                setCheck(e.target.checked);
                setCheckVal(option);
              }} />
            {option}
          </label>
        );
      })

    );
  };

  const CampoSelect = ({ options }) => {
    return (
      <select
        name='appoinment'
        value={appointment}
        onChange={(e) => setApointment(e.target.value)}
        required>
        {
          options.map((option, index) => {
            return (
              <option
                key={index}
                id={index}>{option}</option>
            );
          })
        }
      </select>
    );
  };

  return (
    <>
      <h2>{data.form_name}</h2>
      <form id={data.form_id} className='people_form' onSubmit={handleSubmit}>
        {data.questions.map(question => {
          return (
            <Fragment key={question.question_id}>
              <label htmlFor=''>{question.question}</label>
              {renderTypeInput(question.type, question.question_id, question.options)}
            </Fragment>
          );
        })}
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
}

export default Formularios;

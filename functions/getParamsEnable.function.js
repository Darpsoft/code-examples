/**
 * Get Params Enables
 *
 * @param {Array} params
 * @param {object} values
 * @returns {object}
 */

 const getParamsEnable = (params = [], values = {}) => {
  return Object.keys(values)
    .filter((value) => params.includes(value))
    .reduce((previousValue, currentValue) => {
      return {
        ...previousValue,
        [currentValue]: values[currentValue],
      };
    }, {});
};

let bodyFormPost;
const body = {
  firstName: 'Pedro',
  lastName: "Fuentes",
  age: 24,
  country: "Venezuela",
  location: "Spain"
};

// Para obtener los parametros que quieras a la hora de
// hacer un registro a un endpoint, sin necesidad de hacer
// lo siguiente

const { firstName, lastName, age, country, title, ...otherParams } = body;
bodyFormPost = { firstName, lastName, age, country, title };

// En el caso anterior eran 2 lineas de programación, en el caso que 
// se muestra a continuación, es solo 1 linea, y además valida si 
// lo que estamos solicitando, existe o no.

bodyFormPost = getParamsEnable(['firstName', 'lastName', 'age', 'country', 'title'], body);
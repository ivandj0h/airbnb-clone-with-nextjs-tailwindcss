import { useState } from 'react';

export default function TextPage({}) {
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [radio, setRadio] = useState('');

  function loginName() {
    console.dir(name);
    return name;
  }

  function formIsValid() {
    return name && rememberMe && radio;
  }

  return (
    <div className='container mx-auto'>
      <div className='w-1/2 mt-10 border-2 mx-auto pb-10'>
        <div className='w-1/2 mx-auto mt-16'>
          <input
            className='border-2 w-full my-2 py-2 px-4'
            type='text'
            placeholder='Give your name.'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className='my-2'>
            <p className='my-2'>Please select your gender.</p>
            <div className='flex space-x-4'>
              <input
                type='radio'
                checked={radio === 'male'}
                value='male'
                onChange={(e) => setRadio(e.target.value)}
              />
              <label>Male</label>
              <input
                type='radio'
                checked={radio === 'female'}
                value='female'
                onChange={(e) => setRadio(e.target.value)}
              />
              <label>Female</label>
              <input
                type='radio'
                checked={radio === 'other'}
                value='other'
                onChange={(e) => setRadio(e.target.value)}
              />
              <label>Other</label>
            </div>
          </div>
          <div className='flex space-x-2 my-4'>
            <input
              type='checkbox'
              checked={rememberMe}
              onChange={(e) => setRememberMe(!rememberMe)}
            />

            <label>Remember me</label>
          </div>
          <div className='my-4'>
            <button
              disabled={!formIsValid()}
              className={`border-2 rounded w-full py-2 px-4 ${
                !formIsValid()
                  ? 'text-gray-400 bg-gray 600'
                  : 'text-white bg-pink-300'
              }`}
              onClick={loginName}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//Homework.
// when you click the button, check to see if the checkbox is checked.
// if it is, write the content name to local storage.

// when people click the checkbox and hit the button, it will write the value of the name field into the local storage.

// pull this code into another vs code file
// create components for the input fields

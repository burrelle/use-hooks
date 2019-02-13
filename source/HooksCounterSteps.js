export const One = `
import React from 'react';

export default function Counter(){

}`.trim();

export const Two = `
import React from 'react';

export default function Counter(){
  return (
    <div>
      // Counter to go here...
      <button>+</button>
      <button>-</button>
    </div>
  )
}
`.trim();

export const Three = `
import React, { useState } from 'react';

export default function Counter(){
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>{value}</p>
      <button>+</button>
      <button>-</button>
    </div>
  )
}
`.trim()

export const Four = `
import React, { useState } from 'react';

export default function Counter(){
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
    </div>
  )
}
`.trim()
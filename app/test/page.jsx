import React from 'react'

const page =   () => {

    const handleForm = async (formdata) =>{
        "use server"
        console.log(formdata);
        const username = formdata.get('username');
        console.log("hellow",username);

    } 
  return (
    <div>
        <form action={handleForm}>
            <input type="text" name='username' />
            <button>sent</button>
        </form>
    </div>
  )
}

export default page
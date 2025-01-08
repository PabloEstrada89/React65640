import React from 'react'

const CheckoutForm = () => {
  return (
    <div>CheckoutForm
        <h2>Formulario</h2>
        <form>
            <imput type="text" placeholder="nombre" name="nombre"/>
            <imput type="text" placeholder="mail" name="mail"/>
            <imput type="text" placeholder="teléfono" name="teléfono"/>
            <button> enviar </button>
            <button type="button"> cancelar</button>
        </form>
    </div>
  )
}

export default CheckoutForm
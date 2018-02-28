export default (lang) => {
  switch (lang) {
    case 'en':
      console.log('Hello')
      break
    case 'ja':
      console.log('こにちは')
      break
    case 'es':
      console.log('Hola')
      break
    case 'de':
      console.log('Hallo')
      break
    default:
      console.log('Hello')
  }
}

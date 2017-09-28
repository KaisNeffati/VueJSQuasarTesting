import utils from '../../../src/store/modules/utils'
import data from '../../../src/data/testItems.json'

// destructure assign mutations
const {searchItems} = utils

// destructure assign mutations
const {sortItems} = utils

describe('utils', () => {
  it('SearchItems', () => {
    // mock state
    let items = data.items

    // apply utils
    const resultDefault = items.filter(searchItems(''))
    const resultExist = items.filter(searchItems('phone'))
    const resultNotExist = items.filter(searchItems('notExistInput'))

    // assert result
    expect(resultDefault).to.deep.equal(items)
    expect(resultExist).to.deep.equal([{
      'title': 'iPhone 6S Oro',
      'description': 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
      'price': '740',
      'email': 'iphonemail@wallapop.com',
      'image': 'iphone.png'
    }])
    expect(resultNotExist).to.deep.equal([])
  })
  it('SortItems Default ', () => {
    // mock state
    let items = data.items

    // apply utils
    const resultDefault = items.sort(sortItems('', ''))
    const resultDefaultWithoutOption = items.sort(sortItems('title', ''))
    const resultDefaultWithoutOrder = items.sort(sortItems('', 'asc'))

    // assert result
    expect(resultDefault).to.deep.equal(items)
    expect(resultDefaultWithoutOption).to.deep.equal(items)
    expect(resultDefaultWithoutOrder).to.deep.equal(items)
  })

  it('SortItems String ASC', () => {
    // mock state
    let items = data.items

    // apply utils
    const resultStringAsc = items.sort(sortItems('title', 'asc'))

    // assert result
    expect(resultStringAsc).to.deep.equal([
      {
        'title': 'Bolso piel marca Hoss',
        'description': 'Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.',
        'price': '250',
        'email': 'bagmail@wallapop.com',
        'image': 'bag.png'
      }, {
        'title': 'Coche antiguo americano',
        'description': 'Coche antiguo americano de color marron. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas',
        'price': '210000',
        'email': 'carmail@wallapop.com',
        'image': 'car.png'
      }, {
        'title': 'iPhone 6S Oro',
        'description': 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
        'price': '740',
        'email': 'iphonemail@wallapop.com',
        'image': 'iphone.png'
      }, {
        'title': 'Polaroid 635',
        'description': 'Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.',
        'price': '50',
        'email': 'cameramail@wallapop.com',
        'image': 'camera.png'
      }, {
        'title': 'Reloj de Daniel Wellington',
        'description': 'Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ',
        'price': '100',
        'email': 'watchmail@wallapop.com',
        'image': 'watch.png'
      }])
  })

  it('SortItems String DESC', () => {
    // mock state
    let items = data.items

    // apply utils
    const resultStringDesc = items.sort(sortItems('title', 'desc'))

    // assert result
    expect(resultStringDesc).to.deep.equal([
      {
        'title': 'Reloj de Daniel Wellington',
        'description': 'Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ',
        'price': '100',
        'email': 'watchmail@wallapop.com',
        'image': 'watch.png'
      }, {
        'title': 'Polaroid 635',
        'description': 'Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.',
        'price': '50',
        'email': 'cameramail@wallapop.com',
        'image': 'camera.png'
      }, {
        'title': 'iPhone 6S Oro',
        'description': 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
        'price': '740',
        'email': 'iphonemail@wallapop.com',
        'image': 'iphone.png'
      }, {
        'title': 'Coche antiguo americano',
        'description': 'Coche antiguo americano de color marron. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas',
        'price': '210000',
        'email': 'carmail@wallapop.com',
        'image': 'car.png'
      }, {
        'title': 'Bolso piel marca Hoss',
        'description': 'Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.',
        'price': '250',
        'email': 'bagmail@wallapop.com',
        'image': 'bag.png'
      }])
  })

  it('SortItems Number ASC', () => {
    // mock state
    let items = data.items

    // apply utils
    const resultNumberAsc = items.sort(sortItems('price', 'asc'))

    // assert result
    expect(resultNumberAsc).to.deep.equal([
      {
        'title': 'Polaroid 635',
        'description': 'Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.',
        'price': '50',
        'email': 'cameramail@wallapop.com',
        'image': 'camera.png'
      }, {
        'title': 'Reloj de Daniel Wellington',
        'description': 'Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ',
        'price': '100',
        'email': 'watchmail@wallapop.com',
        'image': 'watch.png'
      }, {
        'title': 'Bolso piel marca Hoss',
        'description': 'Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.',
        'price': '250',
        'email': 'bagmail@wallapop.com',
        'image': 'bag.png'
      }, {
        'title': 'iPhone 6S Oro',
        'description': 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
        'price': '740',
        'email': 'iphonemail@wallapop.com',
        'image': 'iphone.png'
      }, {
        'title': 'Coche antiguo americano',
        'description': 'Coche antiguo americano de color marron. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas',
        'price': '210000',
        'email': 'carmail@wallapop.com',
        'image': 'car.png'
      }])
  })

  it('SortItems Number DESC', () => {
    // mock state
    let items = data.items

    // apply utils
    const resultNumberDesc = items.sort(sortItems('price', 'desc'))

    // assert result
    expect(resultNumberDesc).to.deep.equal([
      {
        'title': 'Coche antiguo americano',
        'description': 'Coche antiguo americano de color marron. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas',
        'price': '210000',
        'email': 'carmail@wallapop.com',
        'image': 'car.png'
      }, {
        'title': 'iPhone 6S Oro',
        'description': 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
        'price': '740',
        'email': 'iphonemail@wallapop.com',
        'image': 'iphone.png'
      }, {
        'title': 'Bolso piel marca Hoss',
        'description': 'Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.',
        'price': '250',
        'email': 'bagmail@wallapop.com',
        'image': 'bag.png'
      }, {
        'title': 'Reloj de Daniel Wellington',
        'description': 'Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ',
        'price': '100',
        'email': 'watchmail@wallapop.com',
        'image': 'watch.png'
      }, {
        'title': 'Polaroid 635',
        'description': 'Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.',
        'price': '50',
        'email': 'cameramail@wallapop.com',
        'image': 'camera.png'
      }])
  })
})

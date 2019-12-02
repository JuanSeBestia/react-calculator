# Frontend

Aquí se recopilará todo lo que tenga que ver con librerías / frameworks / tecnologías relacionadas con Frontend y Javascript.

## NodeJS & NPM

Algunos piensan que no debería estar incluido aquí, pero la realidad es que Front se basa principalmente en JavaScript y no NodeJS es como la JVM para Java. Generalmente hablan de él para crear Backend como con Express, pero en fondo es lo que va correr nuestros proyectos y ejecutar las tareas de compilación.

Muchas veces nunca sabemos nada de el por que es como la capa más baja de nuestro trabajo suelen decir “solo es un emulador para el JS”.

Es obligatorio su instalación!

* Recomiendo esta corta lectura de NodeJs [What exactly is Node.js?](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* Página oficial [https://nodejs.org/es/](https://nodejs.org/es/)

### NPM

Con lo que sí tenemos contacto es con NPM (ya viene instalado en NodeJS) o cualquier administrador de paquetes y dependencias como Yarn, Bower, “cdn”... etc. El propósito de ellos es utilizar un archivo como el package.json para declarar las dependencias de proyecto.

Recomiendo esta corta lectura [Introduction to npm and basic npm commands](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-npm-and-basic-npm-commands-18aa16f69f6b)

* Doc oficial [https://docs.npmjs.com/](https://docs.npmjs.com/)


## Test

[Need Help] Por lo que he visto es bastante utilizado [Enzyme](https://airbnb.io/enzyme/) y [Jest](https://jestjs.io/docs/en/tutorial-react) como Libs para realizar pruebas unitarias de las apps en React y React Native.

He escuchado que transversalmente también usamos [Selenium](https://www.seleniumhq.org/)

## Rambda

Con la aceptación del paradigma funcional en S4N, está es una librería que se ve en casi todos los proyectos, la cual ayuda a satisfacer gran parte de los problemas lógicos comunes pensados en el paradigma funcional

## Loadash

Con la aceptación del paradigma funcional en S4N, está es una librería que se ve en casi todos los proyectos, la cual ayuda a satisfacer gran parte de los problemas lógicos comunes pensados en el paradigma funcional

## React

React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React. Uno de sus puntos más destacados, es que no sólo se utiliza en el lado del cliente, sino que también se puede representar en el servidor, y trabajar juntos.[devcode.la](https://devcode.la/blog/como-funciona-reactjs/)

* [Página oficial](https://reactjs.org)

### Lenguaje / Tipos

Sabemos que JS tiene una tendencia a ser débilmente tipada, lo que aveces incurre a tener errores usuales por no tener los tipos y al mismo tiempo tener una arquitectura de datos muy débil.

Para mitigar ello hay diferentes estrategias, la escogida por S4N, es usar TypeScript como Lenguaje intermedio, que satisface mucho de la problemática anterior. [Más info](https://facebook.github.io/create-react-app/docs/adding-typescript)

#### Lo que necesitas debes saber

* Components (Class & Function)
* Props
* State
* Events
* LifeCycle
    * [Diagram LifeCycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
    *   [Understanding React — Component life-cycle](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d)
* Forms (Controlled & Uncontrolled)
* Hooks (New) [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
* Debugging [Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)
* Gerga de componentes (PureComponents,DumbComponents,SmartComponents,StalessComponents,StateFullComponent, StateLessComponent, PresentationalComponent, ContainerComponent)
### Redux

* [Página oficial](https://redux.js.org/)

#### Lo que necesitas debes saber

* Store
* Thunk + logg
* Saga
* Epics

### MOBX

### React Native

React Native te permite crear aplicaciones móviles usando solo JavaScript. Utiliza el mismo diseño que React, lo que le permite componer una interfaz de usuario móvil rica utilizando componentes declarativos.

Los componentes gráficos básicos creados en JSX son convertido posteriormente en los componentes gráficos nativos y gran parte de la lógica es soportada por el Motor V8 de Android o el motor de JavaScript en iOS, por supuesto escrito en JS.


* [Página Oficial](https://facebook.github.io/react-native/)
* Corta explicación de como funciona [discoversdk](http://www.discoversdk.com/blog/how-react-native-works)
* [Expo Client](https://expo.io/)
* [React Native Client](https://www.npmjs.com/package/react-native-cli)
* [Debugging](https://facebook.github.io/react-native/docs/debugging.html)
    * [Electron Program](https://www.npmjs.com/package/react-devtools)
    * On simulators iOS Simulator `⌘M` or Comand on Android Simulator `Ctrl+M` or `adb shell input keyevent 82`

#### Expo Client vs React Native Client

Estos clientes son los que realizan el bridge a la hora de convertir tu app ReactNative en código nativo, muchos tutoriales oficiales vienen para los dos clientes, por que los dos clientes satisfacen dos lados válidos de la tendencia.

##### Expo Client

En mi resolución Expo client te ofrece muchas ventajas como desarrollador ya que puedes publicar tu app por su PaaS y te ofrece como un HandOff a la hora de la conversión a Nativo, además de que trae un set completo y fácil para consumir las capacidades nativas, las cuales están incluidas en su ExpoKit.

Pero utilizar funcionalidades avanzadas o soluciones específicas nativas dado un SO se torna muy complejo y muchas veces imposible. No es compatible con casi ninguna librería adicional. Por ello a veces si te casaste con Expo no puedes serle infiel.

Además ten encuenta que solo por ello ExpoKit te incluye 34MB en su librería de gratis

##### Native Client

Es verdad que requiere un poco más de esfuerzo, pero ello hace que sea más transparente en la capa nativa y la posibilidad de integrar librerías de terceros en la capa nativa, por ejemplo puedes usar OneSignal como proveedor de notificaciones, Crashalitycs, Firebase, entre otras. Que son muy atractivas o necesarias para algunos proyectos.


La decisión de cual usar debes tenerla en mente deacuerdo a como puede evolucionar la app, pero se recomienda evadir Expo, para obtener el máximo rendimiento / facilidad.

#### Porque React Native

Recordemos que React Native y para hablar de su preferencia tenemos que hablar sobre su competencia. Vemos que Ionic ha estado como líder desde hace bastante tiempo. En el momento que escribo ésto Ionic está en transición de Ionic 3 -> Ionic 4 y aunque se sabe mucho de las mejoras que está reconstruyendo todo en WebComponents aún está muy fresco para prod.

![/assets/imgs/TrendsHybridApps.png](/assets/imgs/TrendsHybridApps.png)

Tenemos que entender que estos frameworks lo que hacen es un puente para construir lo necesario de la parte nativa de cada SO, ya sea por la lógica necesaria o la forma de interpretar el front.

#### WebView

Entre ellos está Ionic + Cordova, NativeScript, Capacitor entre otros, para ellos la ventaja más grande es que se puede usar incluso el mismo código fuente para crear Android, iOS y Web App; ya que ellos utilizan JS, HTML, CSS en su mayoría.

Lo que sucede en realidad en las apps nativas es que corre un web server dentro que será presentado en los WebView integrados por cada compañía o SO de los celulares, sip es una página web haciendo se pasar por una app nativa. La reutilización de código es absurda, pero el WebView es muy dependiente del celular ni siquiera del SO, en un Samsung puede trabajar muy diferente que en Xiaomi y en especial del WebView de safari, esta brecha se está haciendo más corta en el tiempo.

El mayor fallo de esta tendencia es la carga inicial y rendimiento, puesto que primero se tiene que cargar el web server y posteriormente la carga inicial de cualquier SPA en web. Luego le sigue que no se está utilizando los componentes nativos del SO para renderizar las piezas graficas, además la mayor parte de la lógica corre en el hilo de del WebView

#### Brdige Nativo

Entre ellos está ReactNative, Xamarin, Flutter (muy nuevo para cuando escribi), a diferencia del WebView estos utilizan los componentes gráficas nativos para realizar las piezas gráficas, por lo que algunos de ellos utilizan otros lenguajes que no son HTML, JS y CSS.

La empresa tienen una trayectoria con React marcada por las tendencias del mercado y una preferencia por el Lib/Framework, por ello se eligió ReactNative como preferido, por su rendimiento y la facilidad de pasar a ello dado que su equipo ya conoce ReactJS


### React UI

Algunas veces es mucho mejor basarse en alguna librería base para el estilo de los componentes, ademas de proveer en muchos casos implmentaciones para justo lo que necesitamos

* Google Sytle [Material-UI](https://material-ui.com/)
* Bootstrap Style [React Bootstrap](https://react-bootstrap.github.io/)
* Semantic UI [Semantic UI React](https://react.semantic-ui.com/)
* Bootstrap + Material Design [React Toolbox](http://react-toolbox.io/)
* Ant Design [Ant Design](https://ant.design/docs/react/introduce)
* Fundation Design [React Foundation](https://react.foundation/)

#### React UI Animations 

 * Animaciones oficiales [react-transition-group](https://github.com/reactjs/react-transition-group)
 * [react-animation-components](https://github.com/unruffledBeaver/react-animation-components)

En la empresa he escuchado que usualmente utilizan [Lottie](https://airbnb.design/lottie/) para realizar muchas de las animaciones en los proyectos

 * [lottie-web](https://github.com/airbnb/lottie-web)
 * [react-lottie](https://github.com/chenqingspring/react-lottie)
 * Comunidad de Lottie que muestra varias animaciones de la comunidad [lottiefiles.com](https://lottiefiles.com/)

### React Native UI

 * [Native Base](https://nativebase.io/)
 * Oficial? [React Native Elements](https://react-native-training.github.io/react-native-elements/)
 * Shoutem [Shoutem UI](https://shoutem.github.io/ui/)
 * [UI Kitten](https://github.com/akveo/react-native-ui-kitten)
 * [React Native Material UI](https://github.com/xotahal/react-native-material-ui)
 * Otros [blog.bitsrc.io](https://blog.bitsrc.io/11-react-native-component-libraries-you-should-know-in-2018-71d2a8e33312)

#### React Native Ui Animations

* Api oficial de Reac Native [Animations](https://facebook.github.io/react-native/docs/animations) 
* Wrapper en componentes del anterior api para hacer la vida más facil 
    * [react-native-motion](https://github.com/xotahal/react-native-motion)
    * [react-native-animatable](https://github.com/oblador/react-native-animatable)
* Lottie nativo [lottie-react-native](https://github.com/react-native-community/lottie-react-native)

### React Courses, guides and tutoirals

* [reactjs.org - Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Scrimba - Learn React for free](https://scrimba.com/g/glearnreact)
* [Egghead - The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)
* [Egghead - Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [Coursera - Learn frontend with react + Redux](https://www.coursera.org/learn/front-end-react)
* [Udemy - React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/react-the-complete-guide-incl-redux/)
* [Platzi - Desarrollo React + Redux + WebPack](https://platzi.com/desarrollo-react/)
* [Proyecto 26 (video) - Animaciones con React Native! ⏯](https://www.youtube.com/watch?v=E9Z7STYvEgM)
* [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
* [Platzi - React Native](https://platzi.com/cursos/react-native)
* [Coursera - React Native](https://www.coursera.org/learn/react-native)
* [React Native Youtube Channel Official](https://www.youtube.com/user/FacebookDevelopers/search?query=react+Native)

### React Git destacado

Por ser uno de los más nuevos puedo destacar el git de Protección ya que es uno de los más nuevos y que ha acarreado mejores prácticas.

* [webapp-radicacion](https://gitlab.seven4n.com/proteccion/advance/radicacion/webapp-radicacion)

### Otras cositas de React

* Contruye un solo core dos fronts(web + mobile) [Reactive Core architecture for React Native and React applications](https://medium.com/kuralabs-engineering/reactive-core-architecture-for-react-native-and-react-applications-d590daf4ef8a)

### Cosas desconocidas

No se sabe el estado del arte en S4N

* PWA, ServiceWorker
* SSR (Server Side Render), creo que no es algo que se pnesaría hacer
* Multilenguaje
* Soluciones Hybridas entre WebApps

## AngularJS

* [NG-S4N (Sergio Peña y Rodrigo Cifuentes)](https://www.youtube.com/watch?v=FW26lfWwsxU)
* [CodeAcademy AngularJs](https://www.codecademy.com/courses/javascript-advanced-en-2hJ3J/0/1)
* [Use AngularJS to Power Your Web Application](https://www.yearofmoo.com/2012/08/use-angularjs-to-power-your-web-application.html)
* [Shaping up with Angular.js (CodeSchool)](https://www.codeschool.com/courses/shaping-up-with-angular-js)
* [A Better Way to Learn AngularJS (thinkster.io)](https://thinkster.io/a-better-way-to-learn-angularjs)
* [Cursos sobre Angular / JS en general](egghead.io)

## Elm

* [Tour of an Open-Source Elm SPA](https://dev.to/rtfeldman/tour-of-an-open-source-elm-spa)

## Talks / Slides

* [Tooling for the Modern Webapp Developer](https://speakerdeck.com/addyosmani/tooling-for-the-modern-webapp-developer)
* [Large Javascript Application Architecture - Addy Osmani (2011)](https://speakerdeck.com/addyosmani/large-scale-javascript-application-architecture)
* [Una discusión de un grupo de ingenieros intentando elegir qué framework de JS utilizar (muuuy interesante)](https://github.com/TryGhost/Ghost/issues/2144)

## CI/CD
### CI
* unit-test
* build test
* linter test
### CD
* beta deploy
* E2E tests
* save binaries
* Deploy prod?
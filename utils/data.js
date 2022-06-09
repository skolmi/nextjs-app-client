import adultos from '../assets/Adultos.png';
import bachillerato from '../assets/Bachillerato.png';
import preescolar from '../assets/Preescolar.png';
import primaria from '../assets/Primaria.png';

import Image from 'next/image';


const data = {
    products: [
        {
            name: 'Preescolar',
            // price: '250000',
            description: '¡ Una experiencia es muy importante !, asegurate que tus hijos tengan una buena experiencia estudiando en Skolmi',
            //use the image from google drive folder
            srcImage: './../assets/Preescolar.png'
        },
        {
            name: 'Primaria',
            // price: '30000',
            description: 'Metodología afectiva para que tus se diviertan mientras aprenden.¡Estudiar no debe ser aburrido!',
            srcImage: ''
        },
        {
            name: 'Bachillerato',
            // price: '1000',
            description: 'Brindamos una educación inclusiva y afectiva con un toque de flexibilidad.¡Disfruta de tu bachillerato en Skolmi!',
            srcImage: ''
        },
        {
            name: 'Adultos',
            // price: '1000',
            description: 'Con Skolmi podrás ser bachiller sin importar tu edad, nuestra metodología es flexible y eficaz.',
            srcImage: ''
        }
    ],
    values: [
        {
            name: "Innovación",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: 'Emancipación',
            description: 'Creemos en la democracia educativa, motivamos la autonomía, la flexibilidad y la independencia del aprendizaje.'
        },
        {
            name: 'Afectividad',
            description: 'Brindamos una formación integral, inclusiva y afectiva.'
        },
        {
            name: 'Creatividad',
            description: 'Creamos espacios y momentos dinámicos, que impulsan la generación de ideas nuevas, en pro de la adquisición del conocimiento.'
        }
    ],
    benefits : [
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        }
    ],
    testomony : [
        {
            name: 'Patricia Parra',
            description: 'Ipsum est nulla ex ea aliqua Lorem id esse Lorem dolore veniam excepteur. Eu qui commodo aliqua culpa Lorem irure minim adipisicing adipisicing sint officia anim. Commodo laborum commodo amet id. Do officia incididunt non enim nostrud amet. Elit deserunt consequat voluptate consectetur veniam nostrud est ut nostrud cupidatat in eu. Cillum enim irure dolor eiusmod qui culpa proident tempor fugiat. Irure eu excepteur non aliqua sit fugiat est duis incididunt.'
        },
        {
            name: 'Carlos Eduardo Vasquez',
            description : 'Aliquip excepteur magna nulla reprehenderit esse incididunt laborum commodo deserunt. Magna dolore aliquip excepteur dolore et culpa. In do consequat sunt sunt nisi irure duis ut ut pariatur sunt exercitation officia nulla. Laborum mollit anim esse aliquip non aliqua anim. Fugiat cupidatat culpa duis dolore amet fugiat in cillum commodo officia consectetur ut. Esse proident occaecat quis mollit dolore enim do. Id quis Lorem sint labore amet irure ipsum ipsum officia ad ipsum ea aute.'
        }
    ]
}

export {data}
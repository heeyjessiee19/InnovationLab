import React, { Fragment } from 'react'
import './cover.css'
import planet from '../../assets/planet.png'
import cohete from '../../assets/start-up.png'
import planeta from '../../assets/uranus.png'
import mercury from '../../assets/images/planet-mercury.svg'
import venus from '../../assets/images/planet-venus.svg'
import earth from '../../assets/images/planet-earth.svg'
import mars from '../../assets/images/planet-mars.svg'
import jupiter from '../../assets/images/planet-jupiter.svg'
import saturn from '../../assets/images/planet-saturn.svg'
import uranus from '../../assets/images/planet-uranus.svg'
import neptune from '../../assets/images/planet-neptune.svg'
import 'animate.css';

const Cover = () => {
    return (
        <Fragment>
            <div className='prueba'>
                <div className='izq'>
                    <img src={planet} alt='planeta esquina superior izquierda' className='izquierda' />
                </div>
                <div className='centro'>
                    <img src={cohete} alt='cohete del centro' className='center' />
                </div>
                <div className='der'>
                    <img src={planeta} alt='planeta esquina inferior derecha' className='derecha' />
                </div>
            </div>
            <div className='middle'>
                <h1 className='titulo'>The Planets</h1>
                <div className='over'>
                    <img src={mercury} alt='Mercurio' className='planetas' />
                    <div className='overlay'>
                        <div className='text'>Mercury</div>
                    </div>
                </div>
                <div className='over'>
                    <img src={mercury} alt='Mercurio' className='planetas' />
                    <div className='overlay'>
                        <div className='text'>Mercury</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cover

/*<div className='middle'>
                <h1 className='titulo'>The Planets</h1>
                <div className='containers'>
                    <img src={mercury} alt='Mercurio' className='planetas' />
                    <div className='overlay'>
                        <div className='text'>Mercury</div>
                    </div>
                </div>
            </div>*/
/* <div className='item'>
                        <img src={mercury} alt='Mercurio' className='planetas' />
                        <div className='overlay'>
                            <h1 className='text'>Mercury</h1>
                        </div>
                   </div>
                   <div className='item'>
                        <img src={venus} alt='Venus' className='planetas' />
                   </div>
                   <div className='item'>
                        <img src={earth} alt='marte' className='planetas' />
                   </div>
                   <div className='item'>
                        <img src={mars} alt='marte' className='planetas' />
                   </div>
                   <div className='item'>
                        <img src={jupiter} alt='marte' className='planetas' />
                   </div>
                   <div className='item'>
                        <img src={saturn} alt='marte' className='planetas' />
                   </div>
                   <div className='item'>
                        <img src={uranus} alt='marte' className='planetas' />
                   </div>
                   <div className='item'>
                        <img src={neptune} alt='marte' className='planetas' />
                   </div>*/
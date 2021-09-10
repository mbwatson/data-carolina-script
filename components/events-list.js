import styles from '../styles/events.module.css'

export const EventsList = ({ events }) => {
  return (
    <div className={ styles.eventsList }>
      {
        events.map((event, i) => {
          return (
            <div key={ i } className={ styles.event }>
              <h3>{ event.name }</h3>tig
              <p>{ event.description }</p>
            </div>
          )
        })
      }
    </div>
  )
}
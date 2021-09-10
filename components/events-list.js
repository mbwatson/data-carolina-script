export const EventsList = ({ events }) => {
  return events.map((event, i) => {
    return (
      <div key={ i }>
        <h3>{ event.name }</h3>
        <p>{ event.description }</p>
      </div>
    )
  })
}
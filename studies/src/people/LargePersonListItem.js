export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;

    return <>
        <h3>{name}</h3>
        <p>Age: {age} years old</p>
        <p>Hair color: {hairColor}</p>
        <h3>Hobbies: </h3>
        <ul>
            {hobbies.map(hobbie => <li key={hobbie}>{hobbie}</li>)}
        </ul>
    </>
}
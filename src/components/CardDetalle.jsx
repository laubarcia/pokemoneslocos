function CardDetalle() {
    const {name, sprites, abilities} = props
    return ( <>
        <h1>{name}</h1>
        <img src={sprites?.other?.official_artwork?.front_default} />
        <p>{types?.type}</p>
        <p>{abilities?.ability}</p>
    </> );
}

export default CardDetalle;
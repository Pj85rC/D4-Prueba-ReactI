import "./card.css";

const Card = ({saints}) => {
  return (
    <>
      <div key={saints.id} className="card">
        <img
          className="pBox"
          src="assets/pboxPhoenix.png"
          alt="pandorabox"
        />             
        <h3 className="card-title">{saints.name?.split(' ')[0]}</h3>
        <div className="card-desc zoom">
        <h3 className="card-title">{saints.name?.split(' ')[0]}</h3>
          <img
            src={`https://diegochagas.com/saint-seiya-api/${saints.image}`}
            alt=""
          />
          <b>Armadura</b>: {saints.cloths[0]?.cloth ? saints.cloths[0]?.cloth.split(' ')[0] : 'Sin registro'} <br />
          <b>Nacionalidad</b>: {saints.nationality ? saints.nationality : 'Sin registro'}<br />
          <b>Ataques</b>:
          <ul>
            {saints.attacks?.length > 0 ? 
              (saints.attacks.map((att, idx) => 
                <li key={idx}>{att}</li>
              )) 
              : 
              'Sin registro'
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;

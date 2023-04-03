import Card from './Card';

function Tours({tours, removeTour}) {
    return(
        <div className="container">
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {           {/*mapping data of tours with each card component*/} 
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;        {/*key must be passed as argument in map function*/}
                    })      /*      {...tour}->> this is used to send exact copy of the tour inside the Card */
                }
            </div>
        </div>
    );
}

export default Tours;
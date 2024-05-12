import '../style/quality.css'
function Qualities() {
    const data = [{
        icon: '1',
        title: 'Easy Free Delivery',
        note: 'Order On $100'
    },
    {
        icon: '2',
        title: 'Premium Warranty',
        note: 'Up to 2 Year'
    },
    {
        icon: '3',
        title: 'Easy Free Return',
        note: '365 Days Return'
    },
    {
        icon: '4',
        title: '24*7 Online Support',
        note: 'Premium Services'
    }]
    return (
        <div className="container-fluid    px-5 mt-2 mb-2">
            <div className='row quality p-3 '>
                {data?.map((obj, index) =>
                    <div key={index} className={`col-sm-3 d-flex `} style={index  > 0 ? {border:'1px solid #b0afaf' , borderRight:'none' , borderTop:'none', borderBottom:'none'}: null}>
                        <div className='mt-1 p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#E15C0B'}} width="40" height="40" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg></div>
                        <div>
                            <span><strong>{obj.title}</strong></span>
                            <br />
                            <span className='note'>{obj.note}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Qualities;

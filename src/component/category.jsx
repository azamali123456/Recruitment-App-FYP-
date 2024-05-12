import '../style/category.css'
function Category() {
    const data = [{
        icon: '1',
        title: 'Power Tool',
        count: 2
    },
    {
        icon: '2',
        title: 'Abrasives',
        count: 6
    },
    {
        icon: '3',
        title: 'Air Tool',
        count: 2
    },
    {
        icon: '4',
        title: 'Biades',
        count: 1
    },
    {
        icon: '5',
        title: 'Cordless Kit',
        count: 4
    },
    {
        icon: '6',
        title: 'Cutting Tool',
        count: 12
    },
    {
        icon: '7',
        title: 'Hand Tool',
        count: 13
    },
    {
        icon: '8',
        title: 'Nailers',
        count: 18
    },
    {
        icon: '9',
        title: 'Pressure Washer',
        count: 19
    },
    {
        icon: '10',
        title: 'Safety Workwears',
        count: 20
    },
    {
        icon: '11',
        title: 'Safety Equpiments',
        count: 20
    },
    {
        icon: '12',
        title: 'Staple Guns',
        count: 20
    }
]
    return (
        <div className="container-fluid    px-5 mt-2 mb-2">
            <h4 className='text-center mt-5 category-title'>Shop By Category</h4>
            <h6 className='text-center mt-1 category-subtitle'>Check out all the features categories for simple product discovery</h6>
        <div className='row  p-3 '>
            {data?.map((obj, index) =>
                <div key={index} className={`col-sm-2  mt-2 `} >
                   <div className='category-card'>
                    <div className='mt-1 p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#E15C0B'}} width="40" height="40" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg></div>
                    <div className='category-card-text'>
                        <span><strong>{obj.title}</strong></span>

                        (<span className='note'>{obj?.count}</span>)
                    </div>
                    </div>
                </div>
            )}
        </div>
    </div>
    );
}

export default Category;

import Info from './info.png';

const SearchMode = () => {
  return (
    <>
      <li>
        <span class="tooltip right" 
          data-text='Choose a search mode: Item search mode will look for specific items based on given input, Auction search mode will look for live auctions.'>
            Search mode: </span>
        <img src={ Info } style={{ width: '14px', height: '14px' }}>
        </img>
      </li>
      <li>
        <label className='toggle'>
          <input type='checkbox'></input>
          <span className='slider'></span>
          <span class='labels' data-on='Auction' data-off='Item'></span>
        </label>
      </li>
    </>
  )
};

export default SearchMode;
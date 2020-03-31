import styled from 'styled-components'

const ItemsGrid = styled.div`
    display:grid;
    grid-template-rows: 0.5fr auto;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items:center;
    align-items:center;
    @media (max-width: 1500px){
        grid-template-columns: auto auto;
   }
   @media (max-width: 1150px){
        grid-template-columns: auto;
   }
`;

export default ItemsGrid;
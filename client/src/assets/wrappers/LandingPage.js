import styled from 'styled-components';

const Wrapper = styled.section`
 nav{
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
 }
 .page
 {
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
  /* margin-top: -3rem; */
 }
 .info{
  margin-top: -3rem;
 }
 h1{
  font-weight: 700;
  span{
  color: var(--primary-500);
  margin-left: 1rem;
  margin-right: 1rem;
  }
  margin-bottom : 1.5rem;
}
p{
  line-height: 2;
  color: var(--text-secondary-color);
  max-width: 35em;
  margin-bottom: 1.5rem;
}
 .main-img{
  display:none;
 }
 .register-link{
  margin-right: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
 }
 .login-link{
  padding-top: 0.7rem;
  padding-bottom:0.7rem;
 }
 @media (min-width:992px)
{
  .page{
    grid-template-columns: 1fr 400px;
    column-gap: 3rem;
  }
  .main-img{
    display: block;
  }
}
`;
export default Wrapper;

import styled from "styled-components";

export const FormContainer = styled.div`
  .divCEP {
    display: grid;
    grid-template-columns: 12.5rem; 
  }

  .num {
    display: grid;
    grid-template-columns: 12.5rem auto;
    gap: 12px;
  }

  .bai {
    display: grid;
    grid-template-columns: 12.5rem 1fr 3.75rem;
    gap: 12px;
  }

  div + div{
    margin-top: 16px;
  }
`;
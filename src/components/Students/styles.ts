import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  padding: 0 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  table {
    width: 100%;
    text-align: center;

    border-collapse: collapse;

    th {
      font-size: 1.2rem;
      text-transform: uppercase;
      padding: 0.5rem;

      border-bottom: 1px solid var(--gray);
    }

    td {
      padding: 0.4rem;
    }

    & tr:nth-child(even) {
      background-color: #e7f0fd;
    }
    & tr:nth-child(odd) td {
      background-color: #accbee;
    }
  }

  button {
    height: 2rem;
    padding: 0 1rem;
    background: var(--red);
    color: white;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

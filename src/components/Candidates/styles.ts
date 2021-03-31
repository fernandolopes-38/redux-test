import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 300px;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  border-right: 1px solid var(--gray);

  header {
    border-bottom: 1px solid var(--gray);

    padding-bottom: 1.75rem;

    h2 {
      margin-bottom: 0.75rem;
    }
  }

  ul {
    list-style: none;
    margin-top: 1rem;
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
  }

  li {
    padding: 0.5rem;
    margin-right: 1rem;

    border: 1px solid gray;
    border-radius: 0.25rem;

    & + li {
      margin-top: 1rem;
    }
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;

    margin-top: 1rem;
  }

  button {
    height: 2rem;
    padding: 0 1rem;
    background: var(--green);
    color: white;

    transition: filter 0.2s;

    &.remove-button {
      background: var(--red);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

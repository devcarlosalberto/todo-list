import styled from 'styled-components'

export const TaskBoardContainer = styled.div`
  width: 100%;
  max-width: 73.6rem;
  margin: 6.4rem auto 0;

  @media (max-width: 768px) {
    padding-inline: 1.8rem;
  }
`

export const TaskInfos = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    font-weight: bold;

    display: flex;
    gap: 0.8rem;
  }

  p:first-child {
    color: ${(props) => props.theme['blue-200']};
  }

  p:last-child {
    color: ${(props) => props.theme['purple-200']};
  }

  span {
    display: block;
    padding: 0.2rem 0.8rem;
    border-radius: 9999px;
    color: ${(props) => props.theme['gray-200']};
    font-size: 1.2rem;
    background: ${(props) => props.theme['gray-400']};
  }
`

export const EmptyTasks = styled.div`
  margin-top: 6.4rem;

  font-size: 1.6rem;
  color: ${(props) => props.theme['gray-300']};

  text-align: center;

  img {
    margin-bottom: 1.6rem;
  }
`

export const TaskList = styled.ul`
  margin-top: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  li {
    display: flex;
    align-items: start;
    gap: 1.2rem;

    padding: 1.6rem;

    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['gray-400']};
    background: ${(props) => props.theme['gray-500']};

    p {
      flex: 1;
      font-size: 1.4rem;
      line-height: 140%;
    }

    p.text-line-through {
      color: ${(props) => props.theme['gray-300']};
      text-decoration: line-through;
    }

    button {
      background: transparent;
      border: none;
      line-height: 0;
      cursor: pointer;
      padding: 6px;
      border-radius: 5px;

      svg {
        color: ${(props) => props.theme['gray-300']};
      }

      &:hover,
      &:hover svg {
        background: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['danger-200']};
      }
    }
  }
`

export const CheckboxContainer = styled.div`
  position: relative;

  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  cursor: pointer;

  input {
    width: 1px;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  svg {
    color: white;
    width: 8px;
    position: absolute;
    z-index: 9999;
  }

  &::before {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 9999px;
    border-width: 2px;
    border-style: solid;
  }

  &:focus-within {
    outline: 1px solid ${(props) => props.theme['blue-200']};
  }

  &.notChecked::before {
    border-color: ${(props) => props.theme['blue-200']};
  }

  &.notChecked:hover::before {
    border-color: ${(props) => props.theme['blue-500']};
    background: ${(props) => props.theme['blue-500/20']};
  }

  &.checked::before {
    border-color: ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-500']};
  }

  &.checked:hover::before {
    border-color: ${(props) => props.theme['purple-200']};
    background: ${(props) => props.theme['purple-200']};
  }
`

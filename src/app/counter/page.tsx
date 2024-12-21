'use client';

import { increment, decrement, incrementByAmount } from '../../feature/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/common/card'
import { Container } from '../../components/common/container'
import { H3 } from '../../components/typography/headings';
import { P } from '../../components/typography/body';
import { Button } from '../../components/ui/button';

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state: { counter: { value: number } }) => state.counter.value);

  return (
    <Container>
      <Card className="p-6 shadow-lg">
        <H3 className="text-center mb-4">
          Counter Application
        </H3>
        <P className="text-center text-gray-600 mb-6">
          Manage your counter state using Redux and styled components.
        </P>

        <div className="text-center mb-6">
          <H3 className="text-xl font-bold">
            Counter: {count}
          </H3>
        </div>

        <div className="flex justify-center space-x-4">
          <Button onClick={() => dispatch(increment())} >
            Increment
          </Button>
          <Button onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
          <Button onClick={() => dispatch(incrementByAmount(5))} >
            Increment by 5
          </Button>
        </div>
      </Card>
    </Container>
  );
}

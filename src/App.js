import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': '1',
    'image': 'https://picsum.photos/id/1/200/150',
    'name': '홍길동',
    'birth': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': '2',
    'image': 'https://picsum.photos/id/2/200/150',
    'name': '김철수',
    'birth': '560512',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': '3',
    'image': 'https://picsum.photos/id/3/200/150',
    'name': '이영희',
    'birth': '660801',
    'gender': '여자',
    'job': '주부'
  }]

function App() {
  return (
    <Table>
      <TableHead>
      <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {customers.map(c => {
        return <Customer customer={c} key={c.id}></Customer>
      })}

      </TableBody>
      
    </Table>
  );
}

export default App;

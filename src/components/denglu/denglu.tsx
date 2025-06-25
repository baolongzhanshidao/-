'use client';
import { useState } from 'react';
import axios from 'axios';
import {useStore} from '@/store/index';
import { useRouter } from 'next/navigation';
export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const log = useStore(start=>start.log)
  const setuser = useStore(start=>start.setuser)
  const router = useRouter()
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // 模拟登录流程
    axios.post(`/api/denglu?id=${username}&password=${password}`)
    .then(res=>{const zhuangtai = res.data
      console.log(zhuangtai)
      if(zhuangtai)
      alert('注册成功')
      else
      alert('注册失败,已有用户')
    })
  };
  const  handleSubmit2 = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // 模拟登录流程
    axios.get(`/api/denglu?id=${username}&password=${password}`)
    .then( res=>{ const ss = res.data?setuser(username):false 
      console.log(res.data)
      if(ss!=false){
      alert('登录成功')
      router.back()
      log()
    }
    else  
    alert('登录失败，请重试')
    })
  };
  return (
    <form  className="space-y-4">
      <input
        type="text"
        placeholder="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full p-2 border rounded"
        maxLength={2}
      />
      <input
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-2 border rounded"
        maxLength={8}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        注册
      </button>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleSubmit2}
      >
        登录
      </button>
    </form>
  );
}
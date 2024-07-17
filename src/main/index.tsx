import { Login } from '@/presentation/pages'
import React from 'react'
import { createRoot } from 'react-dom/client'

const mainNode = createRoot(document.getElementById('main'))
mainNode.render(<Login />)

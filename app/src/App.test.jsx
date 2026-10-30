import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('halaman utama menampilkan judul utama', () => {
  renderAt('/')
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})

test('navigasi menampilkan link Koleksi', () => {
  renderAt('/')
  expect(screen.getByRole('link', { name: 'Koleksi' })).toBeInTheDocument()
})

test('footer menampilkan informasi UTS', () => {
  renderAt('/')
  expect(
    screen.getByText('Ujian Tengah Semester Pengembangan Aplikasi Web'),
  ).toBeInTheDocument()
})

test('halaman tambah menampilkan judul halaman', () => {
  renderAt('/tambah')
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})

test('rute tidak dikenal menampilkan 404', () => {
  renderAt('/tidak-ada')
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

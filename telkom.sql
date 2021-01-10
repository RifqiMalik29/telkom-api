-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Jan 2021 pada 02.41
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `telkom`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `seller` varchar(200) NOT NULL,
  `checklist` int(11) NOT NULL DEFAULT 1,
  `total_product` int(11) NOT NULL DEFAULT 1,
  `cart_user` int(11) DEFAULT NULL,
  `cart_product` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cart`
--

INSERT INTO `cart` (`id`, `seller`, `checklist`, `total_product`, `cart_user`, `cart_product`) VALUES
(12, 'good_store', 1, 5, 1, 2),
(15, 'bad_store', 1, 3, 1, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `store` varchar(100) NOT NULL,
  `price` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `photo` varchar(100) NOT NULL DEFAULT 'blank',
  `seller_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `store`, `price`, `city`, `photo`, `seller_id`) VALUES
(1, 'Laptop', 'good_store', '115.000', 'Jakarta Utara', '', 1),
(2, 'Kulkas', 'good_store', '138.000', 'Jakarta Utara', '', 2),
(4, 'Kulkas', 'bad_store', '100.000', 'Jakarta Utara', '', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `owner` varchar(200) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `pin` char(6) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 5,
  `photo` varchar(100) NOT NULL DEFAULT 'blank',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `name`, `email`, `owner`, `phone`, `password`, `pin`, `role`, `photo`, `createdAt`, `updateAt`) VALUES
(1, 'Rifqi', 'malikiskandar29@gmail.com', 'good_store', '081245678901', '$2b$10$n8qxUETZxzAwJx1k0eLImedo.qKY6aTKM8BvJxMPG6NmUAEJqKQ82', '123456', 5, '', '2021-01-07 13:00:24', '2021-01-08 15:26:10'),
(2, 'Malik', 'rifqimalik29@gmail.com', 'bad_store', '081245678901', '$2b$10$6EuNbGk.KIX5BOvnOADDfuTX.F4gHIpdIGBJffmH/wVZHetUkyKsG', '123456', 5, '', '2021-01-07 13:33:09', '2021-01-08 15:26:17'),
(3, 'Iskandar', 'myemail@email.com', '', '081245678901', '$2b$10$rSNtfPXPsmyst6UiuppYheZDZ8YTtuKGVE5f9ZHDDWVpB0DpIe8eW', '123456', 5, '', '2021-01-07 15:03:18', '2021-01-08 12:22:43');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `seller` (`seller_id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`cart_user`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`cart_product`) REFERENCES `product` (`product_id`);

--
-- Ketidakleluasaan untuk tabel `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

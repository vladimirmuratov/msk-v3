import React from 'react';
import { Box, Typography } from '@mui/material';

export const AboutBlock = React.memo(() => (
    <Box
        component="article"
        sx={{ paddingX: { xs: '12px', sm: '18px', md: '22px' } }}
    >

        <Box
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
        >
            <Typography sx={{ whiteSpace: 'pre-wrap', color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                При необходимости срочной или плановой госпитализации в Москве, Московской области или из любого региона
                России и стран СНГ — обратитесь в <Box component="span" sx={{ color: 'var(--blue)', fontWeight: 500 }}>Медицинскую
                Сервисную Компанию</Box>.
                <br />
                Мы организуем госпитализацию в ведущие
                клиники столицы, включая федеральные и ведомственные медицинские учреждения, даже при отсутствии полиса
                ОМС.
            </Typography>
        </Box>

        <Box
            data-aos="zoom-out"
            data-aos-duration="1200"
            data-aos-anchor-placement="center-bottom"
            sx={{
                marginY: { xs: '25px', sm: '50px' },
            }}
        >
            <Typography
                component="h3"
                sx={{
                    whiteSpace: 'pre-wrap',
                    color: 'var(--blue)',
                    fontSize: { xs: '24px', md: '28px' },
                    fontWeight: 400,
                    marginBottom: { xs: '10px', sm: '15px' },
                }}
            >
                Наша команда работает круглосуточно, предлагая:
            </Typography>

            <Box
                component="ul"
                sx={{ paddingX: { xs: '12px', sm: '18px', md: '22px' } }}
            >
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Экстренную и плановую госпитализацию
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Перевод пациента из одной больницы в другую
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Лечение тяжелобольных и онкологических пациентов
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Полное сопровождение при транспортировке и оформлении
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Профессиональную патронажную службу для продолжения ухода на дому
                    </Typography>
                </Box>
            </Box>
        </Box>

        <Box
            data-aos="zoom-out"
            data-aos-duration="1400"
            data-aos-anchor-placement="center-bottom"
            sx={{
                marginY: { xs: '25px', sm: '50px' },
            }}
        >
            <Typography sx={{ whiteSpace: 'pre-wrap', color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                Транспортировка пациентов осуществляется специализированными медицинскими автомобилями, оснащёнными всем
                необходимым оборудованием. В пути состояние пациента стабилизируется и контролируется профильными
                специалистами.
            </Typography>
        </Box>

        <Box
            data-aos="zoom-out"
            data-aos-duration="1200"
            data-aos-anchor-placement="center-bottom"
            sx={{
                marginY: { xs: '25px', sm: '50px' },
            }}
        >
            <Typography
                component="h3"
                sx={{
                    whiteSpace: 'pre-wrap',
                    color: 'var(--blue)',
                    fontSize: { xs: '24px', md: '28px' },
                    fontWeight: 400,
                    marginBottom: { xs: '10px', sm: '15px' },
                }}
            >
                Обратившись к нам, вы получаете:
            </Typography>
            <Box
                component="ul"
                sx={{ paddingX: { xs: '12px', sm: '18px', md: '22px' } }}
            >
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Подбор подходящего медицинского учреждения
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Оперативную госпитализацию без очередей и формальностей
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Официальное оформление документов
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Бережную транспортировку с мед.сопровождением
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Индивидуальный подход в сложных клинических случаях
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
));

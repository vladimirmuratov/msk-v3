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
                Если вам вдруг понадобилось лечь в больницу — срочно или по плану — будь вы из Москвы, области или
                вообще из другого уголка России или СНГ, есть смысл обратиться к нам, в <Box component="span" sx={{
                color: 'var(--blue)',
                fontWeight: 500
            }}>Медицинскую Сервисную Компанию</Box>.
                Мы действительно можем взять на себя всю организацию госпитализации: подскажем оптимальный вариант,
                договоримся с ведущими столичными клиниками (в том числе федеральными и ведомственными – теми самыми,
                куда самостоятельно попасть не всегда просто), поможем оформить документы даже если у вас нет полиса
                ОМС. Оказывается, вопрос "как лечь в хорошую больницу" решается проще, когда кто-то разбирается во всех
                нюансах вместо вас.
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
                Мы не из тех, кто смотрит на часы — наша команда всегда на связи. Вот чем мы реально можем помочь:
            </Typography>

            <Box
                component="ul"
                sx={{ paddingX: { xs: '12px', sm: '18px', md: '22px' } }}
            >
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)', marginBottom: '10px' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Если ситуация требует экстренного вмешательства или нужна плановая госпитализация, мы всё
                        организуем без промедления
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)', marginBottom: '10px' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Понадобилось перевезти пациента в другую больницу? Мы берём это полностью на себя — и
                        транспортировку, и оформление всех необходимых бумаг, чтобы для вас эта логистика не стала
                        дополнительным стрессом
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)', marginBottom: '10px' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        У нас есть большой опыт работы с тяжёлыми случаями: мы занимаемся лечением пациентов, которым
                        нужен особый подход, включая онкологические заболевания—и делаем это как в стационаре, так и при
                        перевозке
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)', marginBottom: '10px' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Полное сопровождение во время транспортировки. Человек никогда не остаётся один: специалисты на
                        месте контролируют каждый этап пути — от дверей палаты до новых врачей
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        А если пациент вернулся домой и ему требуется дальнейший уход, мы продолжаем поддерживать:
                        подключаем профессиональную патронажную службу — аккуратно и заботливо помогаем оставаться под
                        присмотром даже вдали от стационара
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
                Работаем с реальными проблемами реальных людей. Здесь нет “выходных” — потому что иногда помощь нужна
                именно ночью или рано утром.
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
                    sx={{ color: 'var(--blue)', marginBottom: '10px' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Когда вы обращаетесь к нам, всё начинает двигаться — наконец-то в нужном вам темпе и порядке.
                        Вместо тысячи звонков по разным клиникам — мы сразу подбираем то, что действительно подходит
                        вашему случаю. Не приходится томиться в длинных очередях или собирать ненужные бумажки:
                        госпитализация происходит быстро, без лишней бюрократии и суеты
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)', marginBottom: '10px' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Оформление документов? Мы берём это на себя, всё официально и прозрачно
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)', marginBottom: '10px' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        Если нужно перевозить пациента — даже лежачего, даже на длинное расстояние — не переживайте:
                        транспортировка проходит бережно, с медицинским сопровождением. Покой и безопасность пациента
                        для нас не пустые слова
                    </Typography>
                </Box>
                <Box
                    component="li"
                    sx={{ color: 'var(--blue)' }}
                >
                    <Typography sx={{ color: 'var(--black)', fontSize: { xs: '18px', md: '20px' } }}>
                        А если речь о сложной истории, где нужен индивидуальный подход, он будет — мы разбираемся во
                        всех деталях случая и ищем оптимальное решение, а не действуем “по шаблону”. В общем, вместо
                        головной боли вокруг медицины появляется чувство: «Наконец-то кто-то взял это на себя»
                    </Typography>
                </Box>

            </Box>
        </Box>
    </Box>
));
